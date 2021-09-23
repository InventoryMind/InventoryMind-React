import React,{useState} from 'react';
import { Avatar, Button, CssBaseline, TextField,  Paper, Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './style';
//added newly
import PropTypes from 'prop-types';
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { WindowSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Login() {
  

  const classes = useStyles();
  const [userType, setUserType] = React.useState('');


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up as a Student
          </Typography>
          <form className={classes.form} noValidate >
          <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ID"
              label="Index No"
              name="IndexNumber"
              autoComplete="Indexnumber"
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
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
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
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              id="nic"
              label="NIC Number"
              name="NIC"
              autoComplete="NIC"
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
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
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
              id="city"
              label="City"
              name="city"
              autoComplete="city"
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
              id="phnNo"
              label="Contact No"
              name="phnNo"
              autoComplete="phnNo"
              autoFocus
              required 
              // values={values.email}
            />
            {/* {errors.email? errors.email:null} */}

            <TextField
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required 
              // values={values.password}
            />
            <TextField
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required 
              // values={values.password}
            />
             {/* {errors.password? errors.password:null} */}


            <Button
            //   onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
            <Link to="/" className="btn btn-primary" >
            <Button
            //   onSubmit={handleSubmit}
              type="submit"
              style={{minWidth:"20px"}}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Back to Login
            </Button>
            {/* submit */}
            </Link>
            

          </form>
        </div>
      </Grid>
    </Grid>
  );
}

