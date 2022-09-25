import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactInfo from "./contacts/contact-info-page";
import ContactsPage from "./contacts/contacts-page";
import HomePage from "./home/home-page";
import MessagesPage from "./message/messages-page";
import NewMessage from "./message/new-message-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/new-message" element={<NewMessage />} />
      <Route path="/contact-info" element={<ContactInfo />} />
      <Route path="/messages" element={<MessagesPage />} />
    </Routes>
  );
};

export default AppRoutes;
