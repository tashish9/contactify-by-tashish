import express from "express";
import { initializeContactsRoutes } from "./contacts/routes";

export const initializeRoutes = (router: express.Router) => [
  initializeContactsRoutes(router),
];
