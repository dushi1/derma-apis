import "reflect-metadata";
import logger from "./src/config/logger";
import { DataSource } from "typeorm";
import { City } from "./src/entity/city.entity";
import { State } from "./src/entity/state.entity";
import { Country } from "./src/entity/country.entity";
import csv from "csv-parser";
import fs from 'fs';

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
    .then(() => {
        const country: any[] = [];
        const state: any[] = [];
        const city: any[] = [];

        fs.createReadStream('countries.csv')
            .pipe(csv())
            .on('data', (data: any) => country.push({ id: data.id, label: data.name }))
            .on('end', async () => {
                await AppDataSource.createQueryBuilder()
                    .insert()
                    .into(Country)
                    .values(country)
                    .execute().then(() => {
                        console.log('Country data Uploaded');
                        fs.createReadStream('states.csv')
                            .pipe(csv())
                            .on('data', (data: any) => state.push({
                                id: data.id,
                                label: data.name,
                                country: data.country_id
                            }))
                            .on('end', async () => {
                                console.log(state.length);
                                await AppDataSource.createQueryBuilder()
                                    .insert()
                                    .into(State)
                                    .values(state)
                                    .execute().then(() => {
                                        console.log('States data Uploaded');
                                        fs.createReadStream('cities.csv')
                                            .pipe(csv())
                                            .on('data', (data: any) => city.push({
                                                id: data.id,
                                                label: data.name,
                                                state: data.state_id
                                            }))
                                            .on('end', async () => {
                                                await AppDataSource.createQueryBuilder()
                                                    .insert()
                                                    .into(City)
                                                    .values(city)
                                                    .execute().then(() => {
                                                        console.log('Citites data Uploaded');
                                                    });
                                            });

                                    });
                            });
                    });;
            });
    })
    .catch((error) => {
        console.log(error);
        logger.error(error);
        process.exit(1);
    });
