import {Link} from "react-router-dom"
import { useState } from "react";

import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
// import { FaFileAlt } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { IoMdNotifications } from "react-icons/io";

import { IoLogoWhatsapp } from "react-icons/io";


import MenuSection from "./styledComponents"

import "./index.css"

const Header = () =>{
    const [isTrue,setIsTrue] = useState(true)

    const onChangeMenu = () =>{
        setIsTrue(prevState =>!prevState)
    }


    return(
    <>
        {/* Contact-details */}
        <div className="contact-container">
            <div className="contact-details">
                <div className="personal-details">
                    <IoMdCall className="icon" />
                    <a href="tel:+9494649481">9494649481</a>
                </div>
                <div className="personal-details">
                    <FaWhatsapp className="icon" />
                    <a href="https://wa.me/9494649481">(+91) 9494649481</a>
                </div>
                <div className="personal-details email">
                    <IoMdMail className="icon" />
                    <a href="mailto:jkcaworld@gmail.com">jkcaworld@gmail.com</a>
                </div>
            </div>
            {/* <div className="personal-details file-details">
                <FaFileAlt className="icon file-icon" />
                <a href="https://www.google.com" className="file">File Your ITR</a>
            </div>
            <ul className="social-media-details">
                <li className="social"><FaFacebookF/></li>
                <li className="social"><FaTwitter/></li>
                <li className="social"><FaYoutube/></li>
                <li className="social"><FaInstagram/></li>
                <li className="social"><FaLinkedinIn/></li>
                <IoMdNotifications className="icon notification-icon"/>
            </ul>     */}
        </div>
        {/* Contact Details */}

        {/* Header Section */}
        <div className="header-container">
            <div className="menu-section">
                {isTrue?(
                    <GiHamburgerMenu className="menu-icon" onClick={onChangeMenu} /> 
                ):(
                    <IoMdClose className="menu-icon" onClick={onChangeMenu}/>
                )}
                <Link to="/">
                    <FaHome className="header-logo" />
                </Link>
            </div>
            <div className="header-details">
                <li>
                    <Link to="/contact-us">
                        Contact Us
                    </Link>
                </li>
                <a className="services" href="#services" id="services">Services</a>
            </div>
            <Link to="/login">
                <button type="button" className="login-btn">Log In / Sign Up</button>
            </Link>
        </div>
        <MenuSection isTrue={isTrue}>
            <Link to="/contact-us" className="menu-item">
                Contact Us
                </Link>
            <hr className="horizontal-line" />
            <a className="menu-item" href="#services" id="services">Services</a>
        </MenuSection>
        
        {/* Header Section */}

        <div className="whats-app-logo-container">
            <a href="https://wa.me/9494649481" target="_blank" rel="noreferrer" className="whatsapp-icon"><IoLogoWhatsapp className="whats-app-logo" /></a>
        </div>
    </>

    )
}
    


export default Header