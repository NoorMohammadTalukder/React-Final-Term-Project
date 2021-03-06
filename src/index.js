import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from './Components/Home';
// import Profile from './Components/Profile';
// import Contact from './Components/Contact';
// import Foot from "./Components/Foot";
import Head from './Components/Head';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ProductDetail from './Components/ProductDetail';
// import AllPosts from './Components/AllPosts';
// import EffectHookCheck from './Components/EffectHookCheck';
// import ColorState from './Components/ColorState';
import Login from './Components/Login';
import Registration from './Components/Registration';
import APIProducts from './Components/APIProducts';
import Update from './Components/Update';
import Logout from './Components/Logout';
import Delete from './Components/Delete';
import axios from 'axios';

var token = null;
if (localStorage.getItem('user')) {
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      {/* <Head /> */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dash">
          <Dashboard />
        </Route>

        <Route exact path="/allproducts">
          <APIProducts />
        </Route>
        <Route exact path="/Registration">
          <Registration />
        </Route>
        <Route exact path="/update">
          <Update />
        </Route>
        <Route exact path="/delete">
          <Delete />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>


      </Switch>


      {/* <Foot /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();