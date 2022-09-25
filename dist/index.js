"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const modules_1 = require("./modules");
const constants_1 = require("./config/constants");
const path_1 = __importDefault(require("path"));
const { PORT } = constants_1.CONSTANTS;
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(express_1.default.json());
app.use(router);
if (process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging") {
    app.use(express_1.default.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname + ".." + "client/build/index.html"));
    });
}
(0, modules_1.initializeRoutes)(router);
const server = (0, http_1.createServer)(app);
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map