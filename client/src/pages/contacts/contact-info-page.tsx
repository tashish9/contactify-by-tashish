import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Contact } from "../../models/contact";
import "./contact-info-page.css";

const ContactInfo = () => {
  const contactData = useLocation().state as Contact;
  return (
    <div className="contact-info-card">
      <h1 className="contact-info-header">Contact Info</h1>
      <div className="contact-data">
        <div className="contact-info-card-name">
          <p> Name : </p>
          <p> {contactData.name}</p>
        </div>
        <div className="contact-info-card-number">
          <p> Phone Number : </p>
          <p> {contactData.phoneNumber}</p>
        </div>
      </div>
      <NavLink
        className="generic-button"
        to={`/new-message?id=${contactData.id}`}
        state={contactData}
      >
        Send Message
      </NavLink>
    </div>
  );
};

export default ContactInfo;
