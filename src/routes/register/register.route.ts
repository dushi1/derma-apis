import express from "express";

import { RegisterRouteController } from "../../controllers/register.controller";

const router = express.Router();

router.post("/", RegisterRouteController);

export default router;