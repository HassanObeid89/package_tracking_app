import React from 'react';


import logo from "../../assets/logo.svg";
import header from '../../styles/header.css';

import { FaUser } from "react-icons/fa";



function Header( { data } ) {


    const {
        user_name,
        
    }= data;
   
   
    return (
        <div className = 'header'>
            <div className = 'header_left'>
            <img className = 'logo' src={logo} />
            <p className='logo_text'>Package Tracker</p>
            </div>
            <div className = 'header'>
                <span className='header_icon'><FaUser  /></span>
                <p className="user_name">{user_name}</p>
            </div>
        </div>
    )
}

export default Header
