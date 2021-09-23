import React,{useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// core components
import Admin from "layouts/Admin.js";
//import RTL from "layouts/RTL.js";
import "./assets/css/material-dashboard-react.css?v=1.10.0";
import Login from "./views/Authentication/login";
import useToken from "./useToken";
import Lecturer from "layouts/Lecturer.js";
import Tech from "layouts/Tech";
import Student from "layouts/Student";
import Register from './views/Authentication/register';
import forgotpassword from "./views/Authentication/forgotPassword"

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


export default function App() {
    //const [token, setToken] = useState();
    //const token = getToken();
    const { token, setToken } = useToken();

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
          {/* <Route path="/rtl" component={RTL} /> */}
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
        <Route path="/lecturer" component={Lecturer} />
          {/* <Route path="/rtl" component={RTL} /> */}
       {/* <Redirect from="/" to="/lecturer/dashboard" /> */}
        <Route path="/tech" component={Tech} />
          {/* <Route path="/rtl" component={RTL} /> */}
        {/* <Redirect from="/" to="/tech/dashboard" /> */}
        <Route path="/student" component={Student} />
        <Route path='/signup' component={Register} />
        <Route path='/forgotPassword' component={forgotpassword} />
        <Route path='/' component={Login} />

      </Switch>
    </BrowserRouter>
 )
}
