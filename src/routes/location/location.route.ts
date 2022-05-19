import express from "express";

import {
    CountryRouteController,
    StateRouteController,
    CityRouteController
} from "../../controllers/location.controller";

const router = express.Router();

router.get("/country", CountryRouteController);
router.get("/state", StateRouteController);
router.get("/city", CityRouteController);

export default router;