import React,{useState} from 'react';
import { Avatar, Button, CssBaseline, TextField,  Paper, Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './style';
//added newly
import PropTypes from 'prop-types';
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { WindowSharp } from '@mui/icons-material';
import { Link,Redirect } from 'react-router-dom';

export default function Login() {
  

  const classes = useStyles();

  async function registerHandler(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email:email,firstName:firstName,lastName:lastName,userId:userId,contactNo:contactNo,password:password})
    };
    // console.log(requestOptions);
    if(userId && firstName && lastName && email && contactNo && password && confirmPassword){
      if(password==confirmPassword){
        await fetch(process.env.REACT_APP_API+'/student/register',requestOptions)
       .then(response => response.json())
      .then(data=>{
          alert(data.msg);
          if (data.msg == "Success"){
            setResponse(true);
          }
      }).catch(e=>alert("ERROR!!! Failed"));
    }
    else{
      alert("Password doesnot match")
    }
    }
    else{
      alert("Fill all the fields")
    }
  
  }
  // console.log(response);
  const [response,setResponse]=useState();
  const [userId,setUserId]=useState();
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [email,setEmail]=useState();
  const [contactNo,setContactNo]=useState();
  const [password,setPassword]=useState();
  const [confirmPassword,setConfirmPassword]=useState();

  if(response){
    return <Redirect to="/" />
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
              onChange={(e)=>setUserId(e.target.value)}
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
              onChange={(e)=>setFirstName(e.target.value)}
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
              onChange={(e)=>setLastName(e.target.value)}
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setContactNo(e.target.value)}
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
              autoComplete="New-password"
              onChange={(e)=>setPassword(e.target.value)}
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
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required 
              // values={values.password}
            />
             {/* {errors.password? errors.password:null} */}


            <Button
              onClick={registerHandler}
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

