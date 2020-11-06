import React from 'react';


import logo from "../../assets/parcel-tailwind.svg";
import header from '../../styles/header.css';

import { ImUser } from "react-icons/im";
import { FaUser } from "react-icons/fa";



function Header( { data } ) {


    const {
        user_name,
        
    }= data;
   
   
    return (
        <div className = 'header'>
            <div className = 'header_left'>
            <img className = 'header_logo' src={logo} alt=""/>
            <p className='logo_text'>Package Tracker</p>
            </div>
            <div >
                <span className='user_name'><FaUser  /></span>
                <p className="header_icon">{user_name}</p>
            </div>
        </div>
    )
}

export default Header
