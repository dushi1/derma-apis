import { Request, Response } from "express";
import { CountryState } from "../entity/countrystate.entity";
import { StateCity } from "../entity/statecity.entity";
import { AppDataSource } from "../index";
import HttpStaus from 'http-status-codes'


const CountryRouteController = async (req: Request, res: Response) => {
    const timber = await AppDataSource
        .getRepository(CountryState)
        .createQueryBuilder("country")
        .select("country.country")
        .getMany()
    res.status(HttpStaus.OK).json({
        data: timber
    })
};

const StateRouteController = async (req: Request, res: Response) => {
    const timber = await AppDataSource
        .getRepository(CountryState)
        .createQueryBuilder("country")
        .select("country.state")
        .where("country.country = :id", { id: 'India' })
        .execute()
    res.status(HttpStaus.OK).json({
        data: timber[0].country_state.split(',')
    })
};

const CityRouteController = async (req: Request, res: Response) => {
    const timber = await AppDataSource
        .getRepository(StateCity)
        .createQueryBuilder("state")
        .select("state.city")
        .where("state.state = :id", { id: 'Delhi - NCR' })
        .getMany()
    res.status(HttpStaus.OK).json({
        data: timber
    })
};

export { CountryRouteController, StateRouteController, CityRouteController };
