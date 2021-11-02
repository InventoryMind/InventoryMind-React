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
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Redirect } from 'react-router-dom';


export default function Login() {
  

  const classes = useStyles();
  const [ottp, setOttp] = useState();
  const [newPass,setNewPass]=useState();
  const [confirmPass,setConfirmPass]=useState();
  const [success,setSuccess]=useState();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!newPass || !ottp){
      alert ("Enter a password or verification code!!!")
    }
    else if(newPass.length<7){
      alert("Passsword Length muste be greater than 8!!!")
    }
    else if(ottp.length!=6){
      alert ("Verification code must be 6 digit!!!")
    }
    else if (newPass==confirmPass){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body:JSON.stringify({newPassword:newPass,verificationCode:ottp})
      };
      fetch(process.env.REACT_APP_API+'/auth/resetPassword',requestOptions)
        .then(response =>response.json())
       .then(data=>{
         alert(data.message)
          if (data.status=="200"){
            setSuccess(true);
          }
       })
       .catch(e=>console.log(e));
    }
    else{
      alert("Password does not match!!!")
    }
   
  }
  
  const handleResend = async e => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    fetch(process.env.REACT_APP_API+'/auth/resendResetCode',requestOptions)
      .then(response =>response.json())
     .then(data=>{
       console.log(data)
        alert(data.message)
     })
     .catch(e=>console.log(e));
   
  }   
    

  if (success){
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
            Verification
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
           
            {/* <TextField
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
              required onChange={e => setUserName(e.target.value)}
              // values={values.email}
            /> */}
            {/* {errors.email? errors.email:null} */}
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="newPass"
              label="New Password"
              name="newPass"
              autoComplete="New Password"
              autoFocus
              required onChange={e => setNewPass(e.target.value)}
              inputProps={{ maxLength: 30 }}
              
              // values={values.email}
            />

            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirmPass"
              label="Confirm Password"
              name="confirmPass"
              autoComplete="Confirm Password"
              autoFocus
              required onChange={e => setConfirmPass(e.target.value)}
              inputProps={{ maxLength: 30 }}
              
              // values={values.email}
            />

            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ottp"
              label="OTTP"
              name="ottp"
              autoComplete="ottp"
              autoFocus
              required onChange={e => setOttp(e.target.value)}
              inputProps={{ maxLength: 6 }}
              
              // values={values.email}
            />
            <Stack sx={{ width: '100%' }} spacing={2}>
            
            <Alert severity="info">No of characters must be 6</Alert>
            </Stack>
            <Button
              onClick={handleResend}
              width="50%"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Resend
            </Button>
            

          
            <Button
              onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Reset Password
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

//added newly
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
