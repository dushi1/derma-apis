import "reflect-metadata";
import app from "./config/express";
import logger from "./config/logger";
import { createConnection } from "typeorm";

const port = process.env.PORT || 5000;

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: process.env.DB_HOST || "localhost",
//   port: 3306,
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "Tiger123@",
//   database: process.env.DB_DATABASE || "test",
//   synchronize: true,
//   entities: [__dirname + "/entity/*.js"],
//   migrations: [__dirname + "/migrations/*.js"],
//   //@ts-ignore
//   "cli.entitiesDir": [__dirname + "/entity/*.js"]
// });

createConnection()
  .then(() => {
    app.listen(port, () => {
      logger.info(`server is running on port ${port}`)
    });
  })
  .catch((error) => {
    console.log(error);
    logger.error(error);
  });
