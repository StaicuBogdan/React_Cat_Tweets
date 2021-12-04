import {Link} from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = ()=>{
    return <nav style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '2rem',
        backgroundColor: '#d9bf8c',
        height: '5vh'
    }}>
        <Link to="/home"><FontAwesomeIcon icon={['fas', 'home']} size='2x'/> Home</Link>
        <Link to="/">Login</Link>
    </nav>;
};

export default Nav;

