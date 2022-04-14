import React, { useState, useEffect } from "react";
import axios from "axios";

const Logout = (props) => {
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
        // var obj = { email: name, password: password };
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
        window.sessionStorage.setItem("token", "notexists");
        window.sessionStorage.setItem("email", "");

    }


    return (
        <div>
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
    )
}
export default Logout; 