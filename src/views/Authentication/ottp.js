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



export default function Login() {
  

  const classes = useStyles();
  const [userType, setUserType] = React.useState('');
  const { token, setToken } = useToken();
  const [username, setUserName] = useState();
  const [ottp, setOttp] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
   
  }   
    

  const handleChange = (event) => {
    setUserType(event.target.value);
    console.log(userType)
  };

  const handleEdit=()=>{
    
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
              onSubmit={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Verify
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
