import {Link} from "react-router-dom"

// import { BsBoxFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

// import { IoLogoWhatsapp } from "react-icons/io";

import Header from "../Header"

import "./index.css"

const Home = () =>(
    <>
    <Header />

    {/* Home BAnner Sectioon */}
    <div className="home-container">
        <h1 className="home-page-heading">Book Appointment with Tax & Compliance Expert</h1>
        <p className="home-para">No geographical barriers to start & manage your business</p>
        {/* <div className="company-services">
            <BsBoxFill className="box-icon" />
            <select className="select-service"services>
                <option value="">Select Service</option>
                <option value="GST Return">GST Return</option> 
                <option value="GST Audit">GST Audit</option>
                <option value="GST Registration">GST Registration</option>
                <option value="Finalisation of P/L and Balance Sheet">Finalisation of P/L and Balance Sheet</option>
                <option value="Income Tax Return & Tax Audit">Income Tax Return & Tax Audit</option>
                <option value="All ROC Related Compliances">All ROC Related Compliances</option>
                <option value="Incorporation of Private Limited, Company, LLP & Patnership Firm ">Company Secretarial</option>
                <option value="EPFO & ESI">EPFO & ESI</option>
                <option value="TDS Filling">TDS Filling</option>
                <option value="Professional Tax">Professional Tax</option>
                <option value="Trade License Registration">Trade License Registration</option>
                <option value="Import and Export Code">Import and Export Code</option>
                <option value="MSME (Udyam Registration)">MSME (Udyam Registration)</option>
                <option value="PAN & TAN Registration">PAN & TAN Registration</option>
                <option value="Digital Signature Creation">Digital Signature Creation</option>
                <option value="Application of shop & establishment certificate">Application of shop & establishment certificate</option>
                <option value="Application of trade license & food license">Application of trade license & food license</option>
                <option value="Preparation of loan ducuments (Provisonal, Estimated, Projected, CMA Data)">Preparation of loan ducuments (Provisonal, Estimated, Projected, CMA Data)</option>
            </select>
        </div> */}
    </div>
    {/* Home BAnner Sectioon */}

    {/* Services Section */}
    <div className="services-container" id="services">
        <h1 className="services-heading">Our Services</h1>
        <hr className="services-line" />
        <ul className="services-list">
            
            <li className="service-item"> <Link to="/contact-us" className="link-item">GST Return</Link> </li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">GST Audit</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">GST Audit</Link>x</li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Finalisation of P/L and Balance Sheet</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Income Tax Return & Tax Audit</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">All ROC Related Compliances</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Company Secretarial</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">EPFO & ESI</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">TDS Filling</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Professional Tax</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Trade License Registration</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Import and Export Code</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">MSME (Udyam Registration)</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">PAN & TAN Registration</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Digital Signature Creation</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Application of shop & establishment certificate</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Application of trade license & food license</Link></li>
            <li className="service-item"> <Link to="/contact-us" className="link-item">Preparation of loan ducuments (Provisonal, Estimated, Projected, CMA Data)</Link></li>
        </ul>
    </div>

    {/* Services Section */}


    {/* Footer Section */}
    <div className="footer-section">
        <h1 className="footer-heading">Contact</h1>
        <div className="footer-details">
            <ul className="footer-list">
                <li className="footer-item">
                    <MdLocationOn className="footer-icon" />
                    <a href="https://maps.app.goo.gl/ZZcGz6NSZMyWpkBY7" target="_blank"  rel="noopener noreferrer">H.No. 1-9-27 & 28, Ram Nagar, Opp. SBI BAnk & Hanuman Temple, Hyderabad - 500020, Telangana</a>
                </li>
                <li className="footer-item">
                    <MdPhoneAndroid className="footer-icon" />
                    <a href="tel:+9494649481">9494649481</a>
                </li>
                <li className="footer-item">
                    <IoMdMail className="footer-icon" />
                    <a href="mailto:jkcaworld@gmail.com">jkcaworld@gmail.com</a>
                </li>
            </ul>
            {/* <ul className="footer-accounts">
                <li className="footer-social"><FaFacebookF/></li>
                <li className="footer-social"><FaTwitter/></li>
                <li className="footer-social"><FaYoutube/></li>
                <li className="footer-social"><FaInstagram/></li>
                <li className="footer-social"><FaLinkedinIn/></li>
            </ul> */}
        </div>
        
    </div>

    {/* Footer Section */}

    {/* Footer Rights */}
    <div className="footer-rights-section">
        <p className="footer-rights"> JK is startup registered entity and links for online payment and we take secure online payments</p>
        <p className="footer-rights-link">
            <MdCopyright className="copy-right-icon" />
            Copyright <span> 2024</span> <a href="https://www.google.com" target="_blank" rel="noreferrer"> JK </a>All Rights Reserved
        </p>
    </div>

    {/* <div className="whats-app-logo-container">
        <a href="https://wa.me/9494649481" target="_blank" rel="noreferrer" className="whatsapp-icon"><IoLogoWhatsapp className="whats-app-logo" /></a>
    </div> */}
    

    </>
)

export default Home