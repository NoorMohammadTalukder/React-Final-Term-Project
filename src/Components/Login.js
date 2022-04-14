import React, { useState, userEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Redirect } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import ReactSession from 'react-client-session';


const Login = () => {
    let history = useHistory();
    // const navigate = Redirect();
    let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    const loginSubmit = () => {
        var obj = { email: name, password: password };
        axios.post("http://127.0.0.1:8000/api/signinSubmit", obj)
            .then(resp => {
                // ReactSession.set("username", "Bob");

                var token = resp.data;
                console.log(token);
                var user = { userId: token.userid, access_token: token.token };
                localStorage.setItem('email', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
                if (token.token != null) {
                    window.sessionStorage.setItem("token", "exists");
                    window.sessionStorage.setItem("email", obj.email);

                    // req.session.user = token.token;
                    alert("Signin successful");
                    history.push("/allproducts");
                }
                // alert("Signin successful");
                // return <Redirect to="http://localhost:3000/allproducts" />;
                // navigate("/allproducts")
                // history.push("/allproducts");
            }).catch(err => {
                console.log(err);
            });


    }

    return (
        <div>
            <h1>Login from here</h1>
            <form>
                <b>Email:</b><br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                <b>Password:</b><br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            </form>
            <button onClick={loginSubmit}>Login</button>

        </div>

    )
}
export default Login; 