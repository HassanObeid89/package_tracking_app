import React from 'react';

import header from '../../styles/header.css';
import logo from "../../assets/parcel-tailwind.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Header() {
    return (
        <div className = 'header'>
            <div className = 'header_left'>
            <img className = 'header_logo' src={logo} alt=""/>
            <h3>Package Tracker</h3>
            </div>
            <div className="header_icons">
                
                
            </div>
        </div>
    )
}

export default Header
