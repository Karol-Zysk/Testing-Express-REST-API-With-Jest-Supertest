import express from "express";
import dotenv from "dotenv";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(deserializeUser);

app.listen(port, async () => {
  logger.info(`${process.env.ELO}App is running at http://localhost:${port}`);

  await connect();

  routes(app);
});
