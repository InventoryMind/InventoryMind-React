import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useState,useEffect } from "react";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  const [data,setData]=useState();
  useEffect(()=>{
    fetch(process.env.REACT_APP_API+'/student/getUserDetails',{credentials:'include'})
     .then(response => response.json())
    .then(data=>setData(data.msg.data))
    .catch(e=>console.log(e));
  },[])
  console.log(data);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Profile</h4>
              <p className={classes.cardCategoryWhite}>User Details</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
               
                <GridItem xs={12} sm={12} md={6}>
                 {/* fetch() */}
                  <CustomInput
                    labelText="Username"
                    id="username"
                    value={data==null ? "" : data.user_id}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                 {/* fetch() */}
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    value={data==null ? "" :data.email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                {/* fetch() */}
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    value={data==null ? "" :data.first_name}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
               </GridContainer> 
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                {/* fetch() */}
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    value={data==null ? "" :data.last_name}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                 {/* fetch() */}
                  <CustomInput
                    labelText="Contact No"
                    id="contactNo"
                    value={data==null ? "" :data.contact_no}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                 {/* fetch() */}
    
              </GridContainer>
              
            </CardBody>
            {/* <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter> */}
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
