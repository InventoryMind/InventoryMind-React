import React,{useState} from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './style';
//added newly
import PropTypes from 'prop-types';
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { WindowSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';



async function loginUser(credentials) {
  return fetch(process.env.REACT_APP_API+'/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login() {
 

  const classes = useStyles();
 
  
  const [email, setEmail] = useState();
  const [userType, setUserType] = useState();
const [sent,setSent]=useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body:JSON.stringify({email:email,userType:userType})
    };
    fetch(process.env.REACT_APP_API+'/auth/forgotPassword',requestOptions)
      .then(response =>response.json())
     .then(data=>{
       console.log(data)
        if (data.status=="200"){
          console.log("Email sent")
          setSent(true)
        }
        else alert(data.message)
     })
     .catch(e=>console.log(e));
   
  }   
 
  if (sent){
    return <Redirect from="/forgotPassword" to="/ottp" />
  }
  
 

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
            Forgot Password
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>

          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">User Type</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userType}
                onChange={e=>setUserType(e.target.value)}
                label="UserType"
                margin="normal"
                required fullWidth
              >
                <MenuItem value={"administrator"}>Admin</MenuItem>
                <MenuItem value={"lecturer"}>Lecturer</MenuItem>
                <MenuItem value={"technical_officer"}>Technical Officer</MenuItem>
                {/* newly added */}
                <MenuItem value={"student"}>Student</MenuItem>
              </Select>
            </FormControl>
            
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
              required onChange={e => setEmail(e.target.value)}
              // values={values.email}
            />
            {/* {errors.email? errors.email:null} */}
           

            
            <Button
              onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Forgot Password
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


