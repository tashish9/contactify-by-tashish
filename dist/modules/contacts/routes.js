"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeContactsRoutes = void 0;
const controllers_1 = require("./controllers");
const initializeContactsRoutes = (router) => {
    router.get("/contacts", controllers_1.getContacts);
    router.post("/send-message", controllers_1.sendMessageToContact);
};
exports.initializeContactsRoutes = initializeContactsRoutes;
//# sourceMappingURL=routes.js.map