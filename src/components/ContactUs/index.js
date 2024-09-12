// // import { useState } from "react";
// // import emailjs from "emailjs-com"
// import React from "react"

// import { IoMdMail } from "react-icons/io";
// import { MdLocationOn } from "react-icons/md";
// import { MdPhoneAndroid } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { MdCopyright } from "react-icons/md";

// import Header from "../Header"

// import "./index.css"

// const ContactUs = () =>{

//     // const [formData, setFormData] = useState({
//     //     name: '',
//     //     email: '',
//     //     mobile: '',
//     //     service:'',
//     //     serviceType:'',
//     //     message:'',
//     //     address: '',
//     //   });

//     //   const {name,email,mobile,service,serviceType,message,address} = formData;
//     //   const handleChange = (e) => {
//     //     setFormData({
//     //       ...formData,
//     //       [e.target.name]: e.target.value,
//     //     });
//     //   };

//     const onSubmitForm = async (event) =>{
//         event.preventDefault();
//         // const formData = new FormData(event.target);
        
//         // formData.append("access_key", "bde3fa9a-c34d-407a-af6f-79fef8b74e8e");

//         // const object = Object.fromEntries(formData);
//         // const json = JSON.stringify(object);

//         // try {
//         //     const response = await fetch("https://api.web3forms.com/submit", {
//         //         method: "POST",
//         //         headers: {
//         //             "Content-Type": "application/json",
//         //             Accept: "application/json",
//         //         },
//         //         body: json
//         //     });
    
//         //     if (!response.ok) {
//         //         throw new Error(`HTTP error! status: ${response.status}`);
//         //     }
    
//         //     const res = await response.json();
    
//         //     if (res.success) {
//         //         console.log("Success", res);
//         //         alert("Sent successfully");
//         //     } else {
//         //         alert(`Error Details: ${JSON.stringify(res)}`);
//         //     }
//         // } catch (error) {
//         //     console.error("Request failed", error);
//         //     alert(`Request failed: ${error.message}`);
//         // }

//         const formData = new FormData(event.target);

//     formData.append("access_key", "bde3fa9a-c34d-407a-af6f-79fef8b74e8e");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
        
//     }

    
//     return(
//         <>
//         <Header />
//         <div>
//             <div className="contact-banner-section">

//                 {/* Contact Section */}
//                 <div className="contact-us-container">
//                     <h1 className="contact-heading">Get in Touch</h1>
//                     <div className="message-container">
//                         {/* <form className="message-info" onSubmit={onSubmitForm}>
//                             <div className="message-top-section">
//                                 <h2 className="message-subheading">Send a message</h2>
//                                 <IoMdMail className="message-mail-logo" />
//                             </div>
//                             <div className="message-details-info">
//                                 <input type="text" className="input-field" name="name"  placeholder="Name"  required />
//                                 <input type="email" className="input-field field" name="email"  placeholder="Email Address*"   required />
//                                 <input type="text" className="input-field" name="mobile"  placeholder="Mobile Number*"   required />
//                                 <select id="service" className="select-input" name="service"  required>
//                                     <option value="">Select your service*</option>
//                                     <option value="GST Return">GST Return</option> 
//                                     <option value="GST Audit">GST Audit</option>
//                                     <option value="GST Registration">GST Registration</option>
//                                     <option value="Finalisation of P/L and Balance Sheet">Finalisation of P/L and Balance Sheet</option>
//                                     <option value="Income Tax Return & Tax Audit">Income Tax Return & Tax Audit</option>
//                                     <option value="All ROC Related Compliances">All ROC Related Compliances</option>
//                                     <option value="Incorporation of Private Limited, Company, LLP & Patnership Firm ">Company Secretarial</option>
//                                     <option value="EPFO & ESI">EPFO & ESI</option>
//                                     <option value="TDS Filling">TDS Filling</option>
//                                     <option value="Professional Tax">Professional Tax</option>
//                                     <option value="Trade License Registration">Trade License Registration</option>
//                                     <option value="Import and Export Code">Import and Export Code</option>
//                                     <option value="MSME (Udyam Registration)">MSME (Udyam Registration)</option>
//                                     <option value="PAN & TAN Registration">PAN & TAN Registration</option>
//                                     <option value="Digital Signature Creation">Digital Signature Creation</option>
//                                     <option value="Application of shop & establishment certificate">Application of shop & establishment certificate</option>
//                                     <option value="Application of trade license & food license">Application of trade license & food license</option>
//                                     <option value="Preparation of loan ducuments (Provisonal, Estimated, Projected, CMA Data)">Preparation of loan ducuments (Provisonal, Estimated, Projected, CMA Data)</option>
//                                 </select>
//                             </div>
//                             <div class="radio-group">
//                                 <label>
//                                     <input type="radio"  class="radio-input" name="service type"  />
//                                     Business
//                                 </label>
//                                 <label>
//                                     <input type="radio"  class="radio-input" name="service type"  />
//                                     Career
//                                 </label>
//                                 <label>
//                                     <input type="radio"  class="radio-input" name="service type" />
//                                     Service
//                                 </label>
//                             </div>
//                             <textarea id="w3review"  rows="4" cols="50" className="text-area" name="message" placeholder="How can we help?" x required />
//                             <div className="submit-container">
//                                 <input type="text" className="input-field"  placeholder="City*" name="address" required />
//                                 <button type="submit" className="submit-btn">Submit</button>
//                             </div>
//                         </form> */}
//                         <form onSubmit={onSubmitForm}>
//                     <input type="text" name="name"/>
//         <input type="email" name="email"/>
//         <textarea name="message"></textarea>
//         <button type="submit">Submit Form</button>
//       </form>
//                         <div className="contact-info">
//                             <h2 className="contact-subheading">Contact Info</h2>
//                             <div className="address-container">
//                                 <div className="contact-logo">
//                                     <MdLocationOn className="contact-logo-icon" />
//                                     <p className="contact-text">Address</p>
//                                 </div>
//                                 <p className="info">H.No. 1-9-27 & 28, Ram Nagar, Opp. SBI BAnk & Hanuman Temple, Hyderabad - 500020, Telangana</p>
//                             </div>
//                             <div className="address-container">
//                                 <div className="contact-logo">
//                                     <MdPhoneAndroid className="contact-logo-icon" />
//                                     <p className="contact-text">Call Us</p>
//                                 </div>
//                                 <p className="info">9494649481</p>
//                             </div>
//                             <div className="address-container">
//                                 <div className="contact-logo">
//                                     <IoMdMail className="contact-logo-icon" />
//                                     <p className="contact-text">E-mail</p>
//                                 </div>
//                                 <p className="info">jkcaworld@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Contact Section */}

//             {/* Location Container */}
//             <div class="map-container">
//             <iframe 
//                 title="Google Map showing location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.070143922137!2d78.5100975!3d17.408421099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99983036fc87%3A0x4eceb99b2f8ea3f1!2sState%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1725967853655!5m2!1sen!2sin" 
//                 allowfullscreen="" 
//                 loading="lazy" 
//                 referrerpolicy="no-referrer-when-downgrade">
//             </iframe>
//             </div>
//             {/* Location Container */}

//             {/* Footer Section */}
//             <div className="footer-section">
//                 <h1 className="footer-heading">Contact</h1>
//                 <div className="footer-details">
//                     <ul className="footer-list">
//                         <li className="footer-item">
//                             <MdLocationOn className="footer-icon" />
//                             <a href="https://maps.app.goo.gl/ZZcGz6NSZMyWpkBY7" target="_blank"  rel="noopener noreferrer">H.No. 1-9-27 & 28, Ram Nagar, Opp. SBI BAnk & Hanuman Temple, Hyderabad - 500020, Telangana</a>
//                         </li>
//                         <li className="footer-item">
//                             <MdPhoneAndroid className="footer-icon" />
//                             <a href="tel:+9494649481">9494649481</a>
//                         </li>
//                         <li className="footer-item">
//                             <IoMdMail className="footer-icon" />
//                             <a href="mailto:jkcaworld@gmail.com">jkcaworld@gmail.com</a>
//                         </li>
//                     </ul>
//                     <ul className="footer-accounts">
//                         <li className="footer-social"><FaFacebookF/></li>
//                         <li className="footer-social"><FaTwitter/></li>
//                         <li className="footer-social"><FaYoutube/></li>
//                         <li className="footer-social"><FaInstagram/></li>
//                         <li className="footer-social"><FaLinkedinIn/></li>
//                     </ul>
//                 </div>    
//             </div>

//             {/* Footer Section */}

//             {/* Footer Rights */}
//                 <div className="footer-rights-section">
//                     <p className="footer-rights"> JK is startup registered entity and links for online payment and we take secure online payments</p>
//                     <p className="footer-rights-link">
//                         <MdCopyright className="copy-right-icon" />
//                         Copyright <span> 2024</span> <a href="https://www.google.com" target="_blank" rel="noreferrer"> JK </a>All Rights Reserved
//                     </p>
//                 </div>

//             {/* Footer Rights */}

//             </div>
//         </>
//     )

// }

// export default ContactUs

import React from "react";

function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bde3fa9a-c34d-407a-af6f-79fef8b74e8e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
  );
}

export default ContactUs;
