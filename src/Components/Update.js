import React, { useState, useEffect } from "react";
import axios from "axios";

const APIProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // axios.get("product/list")
        axios.get("http://127.0.0.1:8000/api/updateCus")
            .then(resp => {
                console.log(resp.data);
                setProducts(resp.data);
            }).catch(err => {
                console.log(err);
                console.log("not found");
            });
    }, []);
    // const cors = require('cors');
    const order = () => {
        // var obj = { email: name, password: password };
        axios.get("http://127.0.0.1:8000/api/my-demo-mail")
            .then(resp => {
                // var token = resp.data;
                console.log("email send");
                // var user = { userId: token.userid, access_token: token.token };
                // localStorage.setItem('email', JSON.stringify(user));
                // console.log(localStorage.getItem('user'));
            }).catch(err => {
                console.log(err);
            });


    }


    return (
        <div>
            <h1> See all Products</h1>
            <ul>
                {
                    // products.map(p => (
                    //     <li key={p.id}>Service id: {p.id} Service Name: {p.userid}  <button onClick={order}>Order</button> </li>
                    // ))
                }
            </ul>
        </div>
    )
}
export default APIProducts; 