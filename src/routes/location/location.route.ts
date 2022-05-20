import express from "express";

import {
    CountryRouteController,
    StateRouteController,
    CityRouteController
} from "../../controllers/location.controller";

const router = express.Router();

router.get("/country", CountryRouteController);
router.get("/state/:country", StateRouteController);
router.get("/city/:state", CityRouteController);

export default router;