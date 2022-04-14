import React, { useState, userEffect } from "react";
import axios from "axios";

const Update = () => {

    //let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    // let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");
    // let [password, setPassword] = useState("");
    var a = window.sessionStorage.getItem("token");

    const updateSubmit = () => {
        if (a == "exists") {
            var email = window.sessionStorage.getItem("email");
            var obj = { name: name, phone: phone, email: email, address: address };
            axios.post("http://127.0.0.1:8000/api/customerUpdateSubmit", obj)
                .then(resp => {
                    // var token = resp.data;
                    // console.log(token);
                    // var user = { userId: token.userid, access_token: token.token };
                    // localStorage.setItem('email', JSON.stringify(user));
                    // console.log(localStorage.getItem('user'));
                    alert("Update Successful");
                }).catch(err => {
                    console.log(err);
                    alert(err);
                });


        }
    }


    return (
        <div>
            <h1>Update your Profile</h1>
            <form>
                <b>Name:</b><br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
                <b>Phone:</b><br></br> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input><br></br>
                {/* <b>Email:</b> <br></br><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br> */}
                <b>Address:</b><br></br> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br>
                {/* <b>Password:</b> <br></br><input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br> */}

            </form>
            <button onClick={updateSubmit}>Update</button>

        </div>

    )

}

export default Update; 