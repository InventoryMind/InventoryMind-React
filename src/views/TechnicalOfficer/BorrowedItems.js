


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
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useEffect,useState} from 'react';






const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: 200,
    borderRadius:"5px",
    // height: "100px",
    backgroundColor: "white",
    border: '2px solid blue',
    //boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
  const [open,setOpen]=React.useState(false);

  const classes = useStyles();
  var rows=[];

  const [items,setItems]=useState();
  useEffect(()=>{
    fetch(process.env.REACT_APP_API+'/techOff/viewBorrowedEquips',{credentials:'include'})
     .then(response => response.json())
    .then(data=>{
      setItems(data.data);
    })
    .catch(e=>console.log(e));
  },[]);
  
  if(items){
    for (let i=0;i < items.length;i++) {
      let element=items[i]
      rows.push({
        id:i+1,
    ID:i+1,
    StudentID:element.student_id,
    BorrowID:element.borrow_id, 
    EquipmentID:element.eq_id,
    Name:element.name,
    BorrowDate:element.date_of_borrowing,
    ReturnDate:element.date_of_returning
      })
    };
  }
  console.log(rows)
 
  return (
    <div>
    

    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Borrowed Item Table</h4>
          
          </CardHeader>
          <CardBody>
                    <div style={{ height: 450, width: '100%' }}>
                         <DataGrid rows={rows} columns={columns} />
                    </div>
           
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  
      
    </div>
  );
}





const columns = [
  {
    field: 'ID',
    headerName: 'ID',
    flex: 0.3,
    minwidth:60,
    
  },
  {
    field: 'StudentID',
    headerName: 'Student ID',
    flex: 0.5,
    minwidth:100,
    
  },
  {
    field: 'BorrowID',
    headerName: 'Borrow ID',
    flex: 0.5,
    minwidth:100,
    
  },
    
    {
        field: 'EquipmentID',
        headerName: 'Equipment ID',
        flex: 0.5,
        minwidth:100,
        
      },
      {
        field: 'Name',
        headerName: 'Equipment Name',
         flex: 0.7,
        minWidth: 120,
      },
      {
        field: 'BorrowDate',
        headerName: 'Borrow Date',
         flex: 0.5,
        minWidth: 100,
      },
      {
        field: 'ReturnDate',
        headerName: 'Return date',
         flex: 0.5,
        minWidth: 100,
      },
];
 {/* fetch() */}


// export default function RenderCellGrid() {
//   return (
    
//   );
// }

            
   