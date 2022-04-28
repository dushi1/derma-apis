import "reflect-metadata";
import app from "./config/express";
import logger from "./config/logger";
import { DataSource } from "typeorm";

const port = process.env.PORT || 5000;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.USERNAME || "root",
  password: process.env.PASSWORD || "Tiger123@",
  database: process.env.DB_DATABASE || "test",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entity/*.js"],
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      logger.info(`server is running on port ${port}`);
    });
  })
  .catch((error) => {
    logger.error(error);
  });
