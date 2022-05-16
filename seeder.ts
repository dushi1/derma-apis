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
import { Gender } from "./src/entity/gender.entity";
import { Privacy } from "./src/entity/privacy.entity";
import { Religion } from "./src/entity/religion.entity";
import { Skin } from "./src/entity/skin.entity";
import { Smoke } from "./src/entity/smoke.entity";
import { Interest } from "./src/entity/interest.entity";
import { Profession } from "./src/entity/profession.entity";


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

    const children: object[] = [];
    const diet: object[] = [];
    const drink: object[] = [];
    const educationField: object[] = [];
    const highestEducation: object[] = [];
    const interests: object[] = [];
    const maritalStatus: object[] = [];
    const privacy: object[] = [];
    const profession: object[] = [];
    const religion: object[] = [];
    const skinDisease: object[] = [];
    const smokes: object[] = [];
    const gender: object[] = [];



    RegisterData.children.forEach((data) => {
      children.push({
        label: data.value,
      });
    });

    RegisterData.diet.forEach((data) => {
      diet.push({
        label: data.value,
      });
    });

    RegisterData.drink.forEach((data) => {
      drink.push({
        label: data.value,
      });
    });
    RegisterData.educationField.forEach((data) => {
      educationField.push({
        label: data.value,
      });
    });
    RegisterData.higestEducation.forEach((data) => {
      highestEducation.push({
        label: data.value,
      });
    });

    RegisterData.marital.forEach((data) => {
      maritalStatus.push({
        label: data.value,
      });
    });
    RegisterData.privacy.forEach((data) => {
      privacy.push({
        label: data.value,
      });
    });
    RegisterData.religion.forEach((data) => {
      religion.push({
        label: data.value,
      });
    });
    RegisterData.skin.forEach((data) => {
      skinDisease.push({
        label: data.value,
      });
    });
    RegisterData.smoke.forEach((data) => {
      smokes.push({
        label: data.value,
      });
    });

    RegisterData.interests.forEach((data) => {
      interests.push({
        label: data,
      });
    });

    Object.keys(RegisterData.profession).forEach(data => {
      //@ts-ignore
      profession.push({ label: data, value: RegisterData.profession[data].toString() })
    })

    RegisterData.gender.forEach((data) => {
      gender.push({
        label: data.value,
      });
    });

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Children)
      .values(children)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Diet)
      .values(diet)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Drink)
      .values(drink)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Education)
      .values(educationField)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(HighestEdu)
      .values(highestEducation)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Marital)
      .values(maritalStatus)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Privacy)
      .values(privacy)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Religion)
      .values(religion)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Skin)
      .values(skinDisease)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Smoke)
      .values(smokes)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Profession)
      .values(profession)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Interest)
      .values(interests)
      .execute();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Gender)
      .values(gender)
      .execute();

  }).catch((error) => {
    console.log(error);
    logger.error(error);
    process.exit(1);
  });
