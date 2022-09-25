import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Contact } from "../../models/contact";
import { sendRequest } from "../../services/request";
import "./contacts-page.css";

const ContactsPage = () => {
  const [contactsList, setContactsList] = useState<Contact[]>([]);

  useEffect(() => {
    const getContactsList = async () => {
      try {
        const contactsListResponse = await sendRequest({
          method: "GET",
          endpoint: "/contacts",
        });
        setContactsList(contactsListResponse);
      } catch (err: any) {
        console.error("An error occurred while fetching contacts", err.message);
      }
    };
    getContactsList();
  }, []);

  return (
    <div className="contacts-container">
      <div className="contacts-heading">Your Contacts</div>
      <div className="contacts-list">
        <li className="contact-list-heading"> Name </li>
        {contactsList.map((el) => {
          return (
            <NavLink
              to={`/contact-info?id=${el.id}`}
              state={el}
              className="contact-name"
              key={el.id}
            >
              {el.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ContactsPage;
