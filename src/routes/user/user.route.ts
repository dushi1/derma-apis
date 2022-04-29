import express from "express";

import { UserRouteController } from "../../controllers/user.controller";

const router = express.Router();

router.get("/", UserRouteController);

export default router;
