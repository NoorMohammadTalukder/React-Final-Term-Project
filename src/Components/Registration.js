import React, { useState, userEffect } from "react";
import axios from "axios";

const Registration = () => {
    //let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");
    let [password, setPassword] = useState("");


    const registrationSubmit = () => {
        var obj = { name: name, phone: phone, email: email, address: address, password: password };
        axios.post("http://127.0.0.1:8000/api/signupSubmit", obj)
            .then(resp => {
                // var token = resp.data;
                // console.log(token);
                // var user = { userId: token.userid, access_token: token.token };
                // localStorage.setItem('email', JSON.stringify(user));
                // console.log(localStorage.getItem('user'));
                alert("Registration successful");
            }).catch(err => {
                console.log(err);
                alert(err);
            });


    }

    return (
        <div>
            <h1>Create Account from here</h1>
            <form>
                <b>Name:</b><br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
                <b>Phone:</b><br></br> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input><br></br>
                <b>Email:</b> <br></br><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
                <b>Address:</b><br></br> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br>
                <b>Password:</b> <br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>

            </form>
            <button onClick={registrationSubmit}>Signup</button>

        </div>

    )

}


export default Registration; 