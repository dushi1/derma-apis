import "reflect-metadata";
import logger from "./src/config/logger";
import { createConnection, getConnection } from "typeorm";
import country from "./dermacountries.json";
import cities from "./dermacities.json";
import users from "./dermaoldusers.json";
import { CountryState } from "./src/entity/countrystate.entity";
import { StateCity } from "./src/entity/statecity.entity";

const port = process.env.PORT || 5000;

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: process.env.DB_HOST || "localhost",
//     port: 3306,
//     username: process.env.DB_USERNAME || "root",
//     password: process.env.DB_PASSWORD || "Tiger123@",
//     database: process.env.DB_DATABASE || "test",
//     synchronize: true,
//     entities: ["src/entity/*.ts"],
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
}).then(async () => {

    const countrystate = country.countries.map((data) => {
        return { country: data.country, state: data.states.toString() }
    })

    const statecity = cities.map((data) => {
        return { city: data.city, state: data.state }
    })


    await getConnection().createQueryBuilder()
        .insert()
        .into(CountryState)
        .values(countrystate)
        .execute().then(() => {
            console.log('Countries state upload completed');
        });

    await getConnection().createQueryBuilder()
        .insert()
        .into(StateCity)
        .values(statecity)
        .execute().then(() => {
            console.log('State cities upload completed');
        });

}).then(() => {
    process.exit(1)
}).catch((error) => {
    logger.error(error);
    process.exit(2);
});
