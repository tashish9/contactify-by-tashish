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

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + ".." + "client/build/index.html"));
  });
}
initializeRoutes(router);

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
