import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config({ path: `${__dirname}/config.env` });

async function connect() {
  const dbUri = `${process.env.DB_URI}`;

  try {
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
