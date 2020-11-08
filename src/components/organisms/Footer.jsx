import React from 'react'

import { SiInstagram } from "react-icons/si";
import { GrFacebook } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/footerLogo.svg";

import footer from '../../styles/footer.css';


function Footer() {
    return (
        
            <section className = 'footer_style'>

                <div className = 'footer_left'>

                    <img className='logo' src={logo} />

                </div>
                    
                    <p> <GrFacebook size='2em' color='blue' /></p>
                    <p><SiInstagram size='2em' color='brown' /></p>
                    <p><HiOutlineMailOpen size='2.3em' color='gray' /></p>
                    <p><FiPhoneCall size='2em' color='gray' /></p>
                   
            </section>
      
    )
}

export default Footer
