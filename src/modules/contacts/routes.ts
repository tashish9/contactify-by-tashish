import { Router } from "express";
import { getContacts, sendMessageToContact } from "./controllers";

export const initializeContactsRoutes = (router: Router) => {
  router.get("/api/contacts", getContacts);
  router.post("/api/send-message", sendMessageToContact);
};
