import React, { useState, useEffect } from "react";
import axios from "axios";
import Head2 from "./Head2"
import { useHistory } from "react-router-dom";

const Delete = (props) => {
    let history = useHistory();
    var a = window.sessionStorage.getItem("token");
    if (a == "notexists") {
        alert("Kindly login first")
        history.push("/");
    }

    const deletePress = () => {
        var email = window.sessionStorage.getItem("email");
        console.log(email);
        var obj = { email: email };
        // axios.post("http://127.0.0.1:8000/api/customerUpdateSubmit", obj)
        axios.post("http://127.0.0.1:8000/api/delete", obj)
            .then(resp => {

                alert("Account Deleted");

                history.push("/");
            }).catch(err => {
                console.log(err);
                alert(err);
            });

    }


    return (
        <center>
            <div>
                <Head2 />

                <h1>Want to Delete Your Account???</h1>
                <button onClick={deletePress}>Delete</button>

            </div>
        </center>
    )
}
export default Delete; 