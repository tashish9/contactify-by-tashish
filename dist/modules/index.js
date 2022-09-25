"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRoutes = void 0;
const routes_1 = require("./contacts/routes");
const initializeRoutes = (router) => [
    (0, routes_1.initializeContactsRoutes)(router),
];
exports.initializeRoutes = initializeRoutes;
//# sourceMappingURL=index.js.map