import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const MainNavigationBar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav-left">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="main-nav-right">
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/messages">Messages</NavLink>
      </div>
    </nav>
  );
};

export default MainNavigationBar;
