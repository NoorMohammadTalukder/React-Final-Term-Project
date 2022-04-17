import React, { useState, useEffect } from "react";
import axios from "axios";
import Head2 from "./Head2"
import { useHistory } from "react-router-dom";

const Logout = (props) => {
    let history = useHistory();
    var a = window.sessionStorage.getItem("token");
    if (a == "notexists") {
        alert("Kindly login first")
        history.push("/");
    }
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     // axios.get("product/list")
    //     axios.get("http://127.0.0.1:8000/api/product/list")
    //         .then(resp => {
    //             var a = window.sessionStorage.getItem("token");
    //             console.log(a);
    //             if (a == "exists") {
    //                 console.log(resp.data);
    //                 setProducts(resp.data);
    //             }

    //         }).catch(err => {
    //             console.log(err);
    //             console.log("not found");
    //         });
    // }, []);
    // const cors = require('cors');
    const logout = () => {
        var tokenString = window.sessionStorage.getItem("tokenString");
        var obj = { tokenString: tokenString };
        axios.post("http://127.0.0.1:8000/api/logout", obj)
            .then(resp => {
                window.sessionStorage.setItem("token", "notexists");
                window.sessionStorage.setItem("email", "");
                alert("logout");

                history.push("/");
            }).catch(err => {
                console.log(err);
                alert(err);
            });
        // axios.get("http://127.0.0.1:8000/api/my-demo-mail")
        //     .then(resp => {
        //         // var token = resp.data;
        //         console.log("email send");
        //         // var user = { userId: token.userid, access_token: token.token };
        //         // localStorage.setItem('email', JSON.stringify(user));
        //         // console.log(localStorage.getItem('user'));
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // window.sessionStorage.setItem("token", "notexists");
        // window.sessionStorage.setItem("email", "");

    }


    return (
        <center>
            <div>
                <Head2 />

                <h1> Logout</h1>
                <button onClick={logout}>Logout</button>
                {/* <ul>
                {
                    products.map(p => (
                        <li key={p.id}>Service id: {p.id} Service Name: {p.name} Price: {p.price} <button onClick={order}>Order</button> </li>
                    ))
                }
            </ul> */}
            </div>
        </center>
    )
}
export default Logout; 