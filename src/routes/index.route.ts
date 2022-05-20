import * as express from "express";

import userRoute from "./user/user.route";
import loginRoute from './login/login.route'
import registerRoute from './register/register.route'
import masterRoute from './masterdata/masterdata.route'
import locationRoute from './location/location.route'
import { getConnection } from "typeorm";
import { CountryState } from "../entity/countrystate.entity";
import { StateCity } from "../entity/statecity.entity";
import country from '../../dermacountries.json'
import cities from '../../dermacities.json'

const router = express.Router();

router.use("/user", userRoute);
router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/masterdata", masterRoute);
router.use("/location", locationRoute);

router.use('/data-upload', async (req, res) => {
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
    res.json({
        up: "done"
    })

})

export default router;
