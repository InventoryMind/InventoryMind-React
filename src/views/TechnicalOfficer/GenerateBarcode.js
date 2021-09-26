import React,{useState} from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from '../Authentication/style';
//added newly
import PropTypes from 'prop-types';
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { WindowSharp } from '@mui/icons-material';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Link } from 'react-router-dom';

export default function GenerateBarcode() {
  

  const classes = useStyles();
  const [userType, setUserType] = React.useState('');
  const handleChange = (event) => {
    setUserType(event.target.value);
    console.log(userType)
  };


  return (
    <Grid container component="main" >
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Generate Barcode </h4>
          
          </CardHeader>
          <CardBody>
        <form className={classes.form} noValidate >
        
            {/* <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">EquipmentType</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userType}
                onChange={handleChange}
                label="UserType"
                margin="normal"
                required fullWidth
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"lecturer"}>Lecturer</MenuItem>
                <MenuItem value={"tech"}>Technical Officer</MenuItem>
                
                <MenuItem value={"student"}>Student</MenuItem>
              </Select>
            </FormControl> */}
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="equipmentName"
              label="Equipment Name"
              name="equipmentName"
              autoComplete="equipmentName"
              autoFocus
              required 
              // values={values.email}
            />
             <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="barcodeID"
              label="Barcode ID"
              name="barcodeID"
              autoComplete="barcodeID"
              autoFocus
              required 
              // values={values.email}
            />
           
           

           <Link to="/tech/addEquipment" className="btn btn-primary" >
            <Button
            //   onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            {/* submit */}
            </Link>

          </form>
          </CardBody>
        </Card>
          {/* <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}
          
        </div>
      </Grid>
    </Grid>
    
  );
}



