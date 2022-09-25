import React from "react";
import { NavLink } from "react-router-dom";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="background">
      <div className="text-container page-content-container">
        <div className="heading">Contactify</div>
        <div className="sub-heading">
          Your one place to View and Manage all of your contacts and messages
        </div>
      </div>
      <div className="actions-container page-content-container">
        <NavLink className="generic-button" to="/contacts">
          View Contacts
        </NavLink>
        <NavLink className="generic-button" to="/messages">
          View Messages
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
