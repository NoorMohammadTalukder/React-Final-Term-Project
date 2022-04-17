import React, { useState, userEffect } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
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
                // console.log(token);
                var user = { userId: token.userid, access_token: token.token };
                localStorage.setItem('user', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
                if (token.token != null) {
                    window.sessionStorage.setItem("tokenString", user.access_token);
                    window.sessionStorage.setItem("token", "exists");
                    window.sessionStorage.setItem("email", obj.email);


                    // req.session.user = token.token;
                    alert("Signin successful");
                    alert(user.access_token);
                    history.push("/allproducts");
                }
                else {
                    alert("Signin unsuccessful");
                }
                // alert("Signin successful");
                // return <Redirect to="http://localhost:3000/allproducts" />;
                // navigate("/allproducts")
                // history.push("/allproducts");
            }).catch(err => {
                console.log(err);
                alert(err);
            });


    }

    return (
        <div>
            <center>
                <h1>Login from here</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <b>Email:</b><br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
                    <b>Password:</b><br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                </Form.Group>
                <br></br>
                <Button onClick={loginSubmit}>Login</Button>
            </center>

            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}

        </div>

    )


}
export default Login; 