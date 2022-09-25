import express from "express";
import { createServer } from "http";
import { initializeRoutes } from "./modules";
import { CONSTANTS } from "./config/constants";
import path from "path";

const { PORT } = CONSTANTS;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(router);

initializeRoutes(router);

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
