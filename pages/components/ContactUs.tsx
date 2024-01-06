import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="form-outerbox">
    <h1 className="text-4xl font-bold text-center pb-4 ">Contact Us</h1>
      <form className="contactUsForm">
        <div className="formElement">
          <input type="text" id="fullName" placeholder="Full Name" />
          <label htmlFor="fullName">
            <FaUser />
          </label>
        </div>
        <div className="formElement">
          <input type="email" id="email" placeholder="Email" />
          <label htmlFor="email">
            <FaEnvelope />
          </label>
        </div>
        <div className="formElement">
          <input type="number" id="phone" placeholder="Phone Number" />
          <label htmlFor="phone">
            <FaPhone />
          </label>
        </div>

        <textarea rows={5} cols={30} placeholder="Message" />

        <button type="submit">Contact</button>
      </form>
    </div>
  );
};

export default ContactUs;
