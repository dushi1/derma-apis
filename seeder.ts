import "reflect-metadata";
import logger from "./src/config/logger";
import { createConnection, getConnection } from "typeorm";
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

// export const getConnection() = new DataSource({
//   type: "mysql",
//   host: process.env.DB_HOST || "localhost",
//   port: 3306,
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "Tiger123@",
//   database: process.env.DB_DATABASE || "test",
//   synchronize: true,
//   entities: ["src/entity/*.ts"],
// });

createConnection({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Tiger123@',
    database: process.env.DB_DATABASE || 'test',
    charset: 'utf8',
    synchronize: process.env.NODE_ENV !== 'production',
    entities: [
        "src/entity/*.ts"
    ]
}).then(async (resp) => {
    const profession: object[] = [];

    const children = RegisterData.children.map((data) => {
        return { label: data.value }
    });

    const diet = RegisterData.diet.map((data) => {
        return { label: data.value }
    });

    const drink = RegisterData.drink.map((data) => {
        return {
            label: data.value,
        }
    });

    const educationField = RegisterData.educationField.map((data) => {
        return {
            label: data.value,
        }
    });

    const highestEducation = RegisterData.higestEducation.map((data) => {
        return {
            label: data.value,
        }
    });

    const maritalStatus = RegisterData.marital.map((data) => {
        return {
            label: data.value,
        }
    });

    const privacy = RegisterData.privacy.map((data) => {
        return {
            label: data.value,
        }
    });
    const religion = RegisterData.religion.map((data) => {
        return {
            label: data.value,
        }
    });

    const skinDisease = RegisterData.skin.map((data) => {
        return {
            label: data.value
        }
    })

    const smokes = RegisterData.smoke.map((data) => {
        return {
            label: data.value,
        }
    });

    const interests = RegisterData.interests.map((data) => {
        return {
            label: data,
        }
    });

    Object.keys(RegisterData.profession).forEach(data => {
        //@ts-ignore
        profession.push({ label: data, value: RegisterData.profession[data].toString() })
    })

    const gender = RegisterData.gender.map((data) => {
        return {
            label: data.value,
        }
    });

    await getConnection().createQueryBuilder()
        .insert()
        .into(Children)
        .values(children)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Diet)
        .values(diet)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Drink)
        .values(drink)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Education)
        .values(educationField)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(HighestEdu)
        .values(highestEducation)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Marital)
        .values(maritalStatus)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Privacy)
        .values(privacy)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Religion)
        .values(religion)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Skin)
        .values(skinDisease)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Smoke)
        .values(smokes)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Profession)
        .values(profession)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Interest)
        .values(interests)
        .execute();

    await getConnection().createQueryBuilder()
        .insert()
        .into(Gender)
        .values(gender)
        .execute();

}).then(() => {
    process.exit(1)
}).catch((error) => {
    console.log(error);
    logger.error(error);
    process.exit(2);
});
