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
  // const onOpenModal = () => {
  //   setOpen(true);
  // };

  // const onCloseModal = () => {
  //   setOpen(false);
  // };

  // const handleEdit=()=>{
  //   window.location.replace("/lecturer/lecturers/edit/1")
  // }
 
  const onReport=(e)=>{
    console.log(e)
  }

  return (
    <div>
   

    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Add Report</h4>
          
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
        field: 'EquipmentID',
        headerName: 'Equipment ID',
        flex: 0.5,
        minwidth:100,
        
      },
      {
        field: 'Name',
        headerName: 'Equipment Name',
         flex: 0.5,
        minWidth: 100,
      },
  {
    // have to do the required things for 3 buttons
    field: 'State',
    headerName: 'State',
    minwidth:150,
    flex:0.8,
    renderCell: (params) => (
      <strong>
        {/* {params.value.getFullYear()} */}
        <Button
          variant="contained"
          color="success"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Usable
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Broken
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Not Usable
        </Button>
      </strong>
    ),
  }
];
 {/* fetch() */}
const rows = [
  {
    id: 1,
    EquipmentID:10,
    Name:"laptop",
  },
  {
    id: 2,
    EquipmentID:10,
    Name:"laptop",
  },
  {
    id: 3,
    EquipmentID:10,
    Name:"laptop",
  },
];

