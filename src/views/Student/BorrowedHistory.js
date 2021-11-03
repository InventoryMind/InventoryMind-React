import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import "react-responsive-modal/styles.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { border } from "@mui/system";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useState,useEffect} from 'react';
const useStyles = makeStyles((theme) => ({
	paper: {
		position: "relative",
		width: 200,
		borderRadius: "5px",
		// height: "100px",
		backgroundColor: "white",
		border: "2px solid blue",
		//boxShadow: theme.shadows[1],
		padding: theme.spacing(2, 4, 3),
	},
}));

const myStyle = {
	display: "flex",
	border: "1px",
	backgroundColor: "gray",
	padding: "20px",
	justifyContent: "space-between",
};
const style = {
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const styles = {
	// root: {
	//   '& > *': {
	//     margin: theme.spacing(1),
	//   },
	// },
	cardCategoryWhite: {
		"&,& a,& a:hover,& a:focus": {
			color: "rgba(255,255,255,.62)",
			margin: "0",
			fontSize: "14px",
			marginTop: "0",
			marginBottom: "0",
		},
		"& a,& a:hover,& a:focus": {
			color: "#FFFFFF",
		},
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
		"& small": {
			color: "#777",
			fontSize: "65%",
			fontWeight: "400",
			lineHeight: "1",
		},
	},
};

// const useStyles = makeStyles(styles);

export default function TableList() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(new Date());
  const [eqData,setEqData]=useState();
  var eqrows=[]
	const handleOpen = (ID,type) => {
		if(type=="Temporary Borrowed")type="temporary"
		else type="normal"
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({borrowId:ID,type:type})
    };
    fetch(process.env.REACT_APP_API+'/student/viewBorrow',requestOptions)
    .then(response =>{if (response.status==200){return new Promise((resolve)=>resolve(response.json()))}})
   .then(data=>{
	   console.log(data)
	if(data)setEqData(data.msg);
	else {alert("No Data to show");
	setOpen(false);
}    //  console.log(data.msg)
   })
   .catch(e=>console.log(e));
    setOpen(true)
  };
  const handleClose = () =>{
    setEqData(); 
    setOpen(false);
  }
	const classes = useStyles();

  const [history,setHistory]=useState();
  var rows=[]
  
  useEffect(()=>{
    fetch(process.env.REACT_APP_API+'/student/viewBorrowedHistory',{credentials:'include'})
     .then(response => response.json())
    .then(data=>{
      setHistory(data.msg);
    })
    .catch(e=>console.log(e));
  },[]);
console.log(history)
  if(history){
    for (let i=0;i < history.length;i++) {
      let element=history[i]
      rows.push({
        id: i+1,
        ID:element.borrowId,
        type:element.type,
        DateOfBorrowing:element.dateOfBorrowing
      })
    };
  }

  if(eqData){
    for (let i=0;i < Object.values(eqData.types).length;i++) {
      let element=Object.values(eqData.types)[i]
      eqrows.push({
        id: i+1,
        ID:i+1,
        Type:element.type,
        Brand:element.brand,
        Total:element.count
      })
    };
  }

  const columns = [
    {
      field: "ID",
      headerName: "Borrow ID",
      flex: 0.5,
      minwidth: 100,
    },
    {
      field: "DateOfBorrowing",
      headerName: "Date Of Borrowing",
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => (
        <strong>
          {/* {params.value.getFullYear()} */}
          <Button
          onClick={()=>{
            // console.log(params)
            handleOpen(params.row.ID,params.row.type)
          }}
            variant="contained"
            color="success"
            size="small"
            style={{ marginLeft: 16 }}
          >
            View
          </Button>     
        </strong>
      ),
    },
  ];

	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>Borrow History</h4>
						</CardHeader>
						<CardBody>
							{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
								<StaticDatePicker
									orientation="landscape"
									openTo="day"
									value={value}
									shouldDisableDate={isWeekend}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider> */}

							<div>
              <div style={{ height: 850, width: "100%" }}>
												<DataGrid rows={rows} columns={columns} />
								</div>
							</div>
							<div>
								{/* <Button onClick={handleOpen}>Open modal</Button> */}
								<Modal
									open={open}
									onClose={handleClose}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
								>
									<Box sx={style}>
										<div style={{ display: "flex", flexDirection: "column" }}>
											<TextField
												id="standard-error"
												label="Request ID"
												variant="standard"
                        value={eqData==null ? "" : eqData.request_id==null ? "None" : eqData.request_id}
                        hidden={eqData==null ? false : eqData.request_id==null ? true : false}
											/>
											<TextField
												id="standard-error"
												label="Student ID"
												variant="standard"
                        value={eqData==null ? "" : eqData.student_id}
											/>
											<TextField
												id="standard-error"
												label="lecturer ID"
												variant="standard"
                        value={eqData==null ? "" : eqData.lecturer_id==null ? "None" : eqData.lecturer_id}
											/>
											<TextField
												id="standard-error"
												label="Date of Borrowing"
												variant="standard"
                        value={eqData==null ? "" : eqData.date_of_borrowing}
											/>
											<TextField
												id="standard-error"
												label="Date of Returning"
												variant="standard"
                        value={eqData==null ? "" : eqData.date_of_returning}
											/>
											<TextField
												id="standard-error"
												label="Reason"
												variant="standard"
                        value={eqData==null ? "" : eqData.reason}
											/>

											<div style={{ height: 250, width: "100%" }}>
												<DataGrid rows={eqrows} columns={eqcolumns} />
											</div>
										</div>
									</Box>
								</Modal>
							</div>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
  
}

const eqcolumns = [
	{
		field: "Type",
		headerName: "Type",
		flex: 0.5,
		minwidth: 100,
	},
	{
		field: "Brand",
		headerName: "Brand",
		flex: 0.5,
		minWidth: 100,
	},
	{
		field: "Total",
		headerName: "Total",
		flex: 0.5,
		minWidth: 180,
	},
];
// fetch()


