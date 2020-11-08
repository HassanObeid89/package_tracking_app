import React from 'react';


import logo from "../../assets/logo.svg";
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
            <div className = 'header_right'>
                <span className='header_icon'><FaUser  /></span>
                <p className="user_name">{user_name}</p>
            </div>
        </div>
    )
}

export default Header
