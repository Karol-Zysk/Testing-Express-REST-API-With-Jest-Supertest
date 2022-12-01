import dotenv from "dotenv";
import connect from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";
dotenv.config({ path: "./config.env" });

const app = createServer();

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  logger.info(`${process.env.ELO}App is running at http://localhost:${port}`);

  await connect();
});
