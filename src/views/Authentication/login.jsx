import React,{useState} from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './style';
//added newly
import axios from 'axios';
import PropTypes from 'prop-types';
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { ConstructionOutlined, WindowSharp } from '@mui/icons-material';
import jwt_decode from 'jwt-decode';

// import {useFormik} from "formik";
// import * as Yup from "yup";

// const validationSchema=Yup.object({
//   email:Yup.string().required("Required"),
//   password:Yup.string().required("Required")

// });

//uncommented newly
async function loginUser(email,password,userType) {
  // console.log(email.userType);
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email:email.username, password:email.password,userType:email.userType })
  };
  // console.log(requestOptions);
  return fetch(process.env.REACT_APP_API+'/auth/login',requestOptions)
     .then(response => response.json())
    .then(data=>{return data});
 }




//email and password need to be validated
export default function Login() {
  // function validate(values){
  //   const errors={};
  //   if(!values.email){
  //     errors.email="Required";
  //   }
  //   if(!values.password){
  //     errors.password="Required";
  //   }
  //   return errors;
  // }
  // const {handleSubmit,handleChange,values,errors}=useFormik({
  //   initialValues:{
  //     email:"",
  //     password:""
  //   },
  //   validationSchema,
  //   onSubmit(values){
  //     console.log(values);
  //   }
  // });

  const classes = useStyles();
  const [userType, setUserType] = useState();
  const { token, setToken } = useToken();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const[isRegistered,setRegister]=useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    //newly commented
    
    const res = await loginUser({
      username,
      password,
      userType
    }).catch(e=>console.log(e));
    if(!res) alert ("Try again later")
    else if (res.status!=200){
      console.log(res.status)
      alert(res.message)
    }
  
    else{
    setToken(res.token);

    

    if(userType=="administrator"){
     window.location.replace("/admin/dashboard")
    
    }
    if(userType=="lecturer"){
      window.location.replace("/lecturer/dashboard")
     
    }
    if(userType=="technical_officer"){
      window.location.replace("/tech/dashboard")
     
    }
    if(userType=="student"){
      window.location.replace("/student/dashboard")
     
    }
  }
  }

  const handleChange = (event) => {
    setUserType(event.target.value);
    console.log(userType)
  };

  const handleEdit=()=>{
    
  }
   function handleRegister(){
    console.log("there")
    setRegister(true);
  }
  function handleNonRegister(){
    console.log("thereis")
    setRegister(false);
  }

  if (token){
    const payload=jwt_decode(token);
    setUserType(payload.userType);
    if(userType=="administrator"){
      window.location.replace("/admin/dashboard")
     }
     if(userType=="lecturer"){
       window.location.replace("/lecturer/dashboard")
     }
     if(userType=="technical_officer"){
       window.location.replace("/tech/dashboard")
     }
     if(userType=="student"){
       window.location.replace("/student/dashboard")
     }
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">User Type</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userType}
                onChange={handleChange}
                label="UserType"
                margin="normal"
                required fullWidth
              >
                <MenuItem value={"administrator"}onClick={handleNonRegister}>Admin</MenuItem>
                <MenuItem value={"lecturer"}onClick={handleNonRegister}>Lecturer</MenuItem>
                <MenuItem value={"technical_officer"}onClick={handleNonRegister}>Technical Officer</MenuItem>
                {/* newly added */}
                <MenuItem value={"student"} onClick={handleRegister}>Student</MenuItem>
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
              required onChange={e => setUserName(e.target.value)}
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
              required onChange={e => setPassword(e.target.value)}
              // values={values.password}
            />
             {/* {errors.password? errors.password:null} */}

            
            <Button
              onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPassword" variant="body2" onClick={()=>window.location.replace('/forgotPassword')}>
                {/* forgot password need to be implemented */}
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                 {isRegistered && 
                  <Link href="/signup"onvariant="body2" onClick={()=>window.location.replace('/signup')}>
                    { "Register"}
                  </Link>}
                  {/* <button onClick={()=>{window.location.replace('/signup')}} >
                    Register
                  </button> */}
                </Grid>

            </Grid>

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
