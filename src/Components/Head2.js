import React from "react";
import { Link } from "react-router-dom";

const Head2 = () => {
    var a = window.sessionStorage.getItem("token");
    // if (a == "exists") {
    return (
        <div>

            {/* <Link to="/">Login</Link> */}
            {/* <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product/1">Student</Link>
            <Link to="/posts">All Posts</Link>
            <Link to="/effect">Effect State</Link>
            <Link to="/color">Color State</Link>
            
            <Link to="/login">Login</Link> */}
            {/* <Link to="/Registration">Registration</Link> */}
            <Link to="/allproducts">Products</Link>

            <Link to="/update">Update</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/delete">Delete Your Account</Link>
        </div>
    )
    // }

}

export default Head2;