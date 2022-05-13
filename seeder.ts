import "reflect-metadata";
import logger from "./src/config/logger";
import { DataSource } from "typeorm";
import { Drink } from "./src/entity/drink.entity";
import { RegisterData } from "./data";

const port = process.env.PORT || 5000;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "Tiger123@",
  database: process.env.DB_DATABASE || "test",
  synchronize: true,
  entities: ["src/entity/*.ts"],
});

AppDataSource.initialize()
  .then(async () => {
    const data = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Drink)
      .values([{ label: "nhi piini" }])
      .execute();
    console.log(data);
    process.exit(1);
  })
  .catch((error) => {
    console.log(error);
    logger.error(error);
    process.exit(1);
  });
