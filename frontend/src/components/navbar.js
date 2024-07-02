import { Link } from "react-router-dom";
// import suggestions from "./suggestions.js";
// import {useEffect, useState} from 'react';

const Navbar = (props) => {

  return (
    <div className="navbar">
        <div className="com-icon"><h3>QuoteGen</h3></div>
        <div>
        <Link to="/auth"><button className="login-button">Login</button></Link>
        </div>
    </div>
  )
}

export default Navbar;
