import "reflect-metadata";
import logger from "./src/config/logger";
import { DataSource } from "typeorm";
import { RegisterData } from "./data";

import { Drink } from "./src/entity/drink.entity";
import { Education } from "./src/entity/education.entity";
import { HighestEdu } from "./src/entity/highestEdu.entity";
import { Marital } from "./src/entity/marital.entity";
import { Children } from "./src/entity/children.entity";
import { Diet } from "./src/entity/diet.entity";
//github.com/dr5hn/countries-states-cities-database/tree/master/csv

https: const children: object[] = [];
const diet: object[] = [];
const drink: object[] = [];
const educationField: object[] = [];
const highestEducation: object[] = [];
const interest: object[] = [];
const maritalStatus: object[] = [];
const privacy: object[] = [];
const profession: object[] = [];
const religion: object[] = [];
const skinDisease: object[] = [];
const smokes: object[] = [];

RegisterData.children.forEach((data) => {
  children.push({
    value: data.label,
    label: data.value,
  });
});

RegisterData.diet.forEach((data) => {
  diet.push({
    value: data.label,
    label: data.value,
  });
});

RegisterData.drink.forEach((data) => {
  drink.push({
    value: data.label,
    label: data.value,
  });
});
RegisterData.educationField.forEach((data) => {
  educationField.push({
    value: data.label,
    label: data.value,
  });
});
RegisterData.higestEducation.forEach((data) => {
  highestEducation.push({
    value: data.label,
    label: data.value,
  });
});

RegisterData.marital.forEach((data) => {
  maritalStatus.push({
    value: data.label,
    label: data.value,
  });
});
RegisterData.privacy.forEach((data) => {
  privacy.push({
    value: data.label,
    label: data.value,
  });
});
RegisterData.religion.forEach((data) => {
  religion.push({
    value: data.label,
    label: data.value,
  });
});
RegisterData.skin.forEach((data) => {
  skinDisease.push({
    value: data.label,
    label: data.value,
  });
});
RegisterData.smoke.forEach((data) => {
  smokes.push({
    value: data.label,
    label: data.value,
  });
});

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
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Drink)
      .values([{ label: "" }])
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Education)
      .values([{ label: "" }])
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(HighestEdu)
      .values([{ label: "" }])
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Marital)
      .values([{ label: "" }])
      .execute();

    process.exit(1);
  })
  .catch((error) => {
    console.log(error);
    logger.error(error);
    process.exit(1);
  });
