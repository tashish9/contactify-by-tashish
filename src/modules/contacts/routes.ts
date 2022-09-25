import { Router } from "express";
import { getContacts, sendMessageToContact } from "./controllers";

export const initializeContactsRoutes = (router: Router) => {
  router.get("/contacts", getContacts);
  router.post("/send-message", sendMessageToContact);
};
