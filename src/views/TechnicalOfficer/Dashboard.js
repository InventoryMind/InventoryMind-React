import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";

import DescriptionIcon from "@material-ui/icons/Description";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { useState,useEffect } from "react";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { People } from "@material-ui/icons";

const useStyles = makeStyles(styles);
var today = new Date(),

date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export default function Dashboard() {
  const classes = useStyles();
  const [data,setData]=useState();
  useEffect(()=>{

    fetch(process.env.REACT_APP_API+'/techOff/getDashboardDataM',{credentials:'include'})
     .then(response => response.json())
    .then(data=>setData(data.msg))
    .catch(e=>console.log(e));
    console.log(data)

  },[])
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
              <p className={classes.cardCategory}>Equipments</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}> {data==null ? "Loading..." : data[0].count}</h3>  
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of equipments
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
              <p className={classes.cardCategory}>Requested Equipments</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}>{data==null ? "Loading..." :data[1].count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of Requested Equipments
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
              <p className={classes.cardCategory}>Temporary Borrowed</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}>{data==null ? "Loading..." :data[2].count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of temporary borrowed equipments
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
              <p className={classes.cardCategory}>Borrowed Equipments</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}>{data==null ? "Loading..." :data[3].count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of borrowed equipments
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
              <p className={classes.cardCategory}>Not Usable Equipments</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}>{data==null ? "Loading..." :data[4].count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of not usable equipments
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
      
    </div>
  );
}
