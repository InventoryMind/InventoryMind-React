import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
//import Warning from "@material-ui/icons/Warning";
//import DateRange from "@material-ui/icons/DateRange";
//import LocalOffer from "@material-ui/icons/LocalOffer";
//import Update from "@material-ui/icons/Update";
import DescriptionIcon from "@material-ui/icons/Description";
//import ArrowUpward from "@material-ui/icons/ArrowUpward";
//import AccessTime from "@material-ui/icons/AccessTime";
//import Accessibility from "@material-ui/icons/Accessibility";
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
//import Tasks from "components/Tasks/Tasks.js";
//import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import useToken from "useToken";
import { useEffect,useState } from "react";
import jwt_decode from 'jwt-decode';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { People } from "@material-ui/icons";
import { element } from "prop-types";

const useStyles = makeStyles(styles);
var today = new Date(),

date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export default function Dashboard() {
  const classes = useStyles();

  // const {token,setToken}=useToken();
  // var decoded=jwt_decode(token);
  // console.log(decoded);
  const [data,setData]=useState();

  useEffect(()=>{
    console.log("sff")
    fetch(process.env.REACT_APP_API+'/student/getDashboardDataM',{credentials:'include'})
     .then(response =>{
       if (response.status==200)return new Promise((resolve)=>resolve(response.json()));
       else alert("Service Unavailable")
     })
    .then(data=>{
      setData(data.msg);
    })
    .catch(e=>console.log(e));
  },[]);
  console.log(data);

  var rows=[];
  if(data)
{data.forEach((element,i)=>{
  rows.push([i+1,element.borrowId,element.dateOfBorrowing,element.dateOfReturning,element.type])
})}

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                {/* <Icon>content_copy</Icon> */}
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Borrowed Equipmnets</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}> 49</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total nummber of borrowed equipments
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>Returnded Equipments</p>
                {/* fetch() */}
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of returned equipments
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                {/* <Icon>info_outline</Icon> */} <People />
              </CardIcon>
              <p className={classes.cardCategory}>Unreturned Equipments</p>
                {/* fetch() */}
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of unreturned equipments
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>Borrowed Count</p>
                {/* fetch() */}
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of times Equipments borrowed
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
      <GridContainer>
       
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Returns Pending</h4>
              <p className={classes.cardCategoryWhite}>
                Details as of {date}
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Borrow ID", "Date of Borrowing", "Date of Returning","Type"]}
                // fetch()
                tableData={rows}
              />
            </CardBody>
          </Card>
        </GridItem>
       
      </GridContainer>
    </div>
  );
}
