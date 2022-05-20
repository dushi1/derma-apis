import { Request, Response } from "express";
import { CountryState } from "../entity/countrystate.entity";
import { StateCity } from "../entity/statecity.entity";
import HttpStaus from 'http-status-codes'
import { getConnection } from "typeorm";


const CountryRouteController = async (req: Request, res: Response) => {
    const country = await getConnection()
        .getRepository(CountryState)
        .createQueryBuilder("country")
        .select("country.country")
        .getMany()
    const countryArray = country.map((data) => {
        return { label: data.country, value: data.country }
    })
    res.status(HttpStaus.OK).json({
        data: countryArray
    })
};

const StateRouteController = async (req: Request, res: Response) => {

    const state = await getConnection()
        .getRepository(CountryState)
        .createQueryBuilder("country")
        .select("country.state")
        .where("country.country = :id", { id: req.params.country })
        .execute()

    const stateArray = state[0].country_state.split(',').map((data: any) => {
        return { label: data, value: data }
    })

    res.status(HttpStaus.OK).json({
        data: stateArray
    })
};

const CityRouteController = async (req: Request, res: Response) => {
    const city = await getConnection()
        .getRepository(StateCity)
        .createQueryBuilder("state")
        .select("state.city")
        .where("state.state = :id", { id: req.params.state })
        .getMany()
    const cityArray = city.map((data) => {
        return { label: data.city, value: data.city }
    })
    res.status(HttpStaus.OK).json({
        data: cityArray
    })
};

export { CountryRouteController, StateRouteController, CityRouteController };
