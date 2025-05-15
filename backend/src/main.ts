//This is the main entry point of the application
import {connectDB} from './db/db.ts';
import {env} from './config/env.ts'

import express from 'express';
import {logger} from './config/logger.ts';
const app = express();

const PORT = env.PORT

connectDB()
  .then(() => {
    app.on("error", (err) => {
      logger.error("Application runtime error", err);
      throw err;
    });

    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("Database connection failed", err);
    process.exit(1);
  });




