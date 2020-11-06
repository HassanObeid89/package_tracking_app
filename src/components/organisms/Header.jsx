import React from 'react';


import logo from "../../assets/parcel-tailwind.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function Header( { data } ) {

    const {
        user_name,
        
    }= data;
   
   
    return (
        <div className = 'header'>
            <div className = 'header_left'>
            <img className = 'header_logo' src={logo} alt=""/>
            <h3>Package Tracker</h3>
            </div>
            <div className="header_icons">
                <h1>head</h1>
                {/* <h2>{id}</h2> */}
                {/* <p>{user_name}</p> */}
                <p>{user_name}</p>
            </div>
        </div>
    )
}

export default Header
