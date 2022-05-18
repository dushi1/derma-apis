import express from "express";

import { MasterDataRouteController } from "../../controllers/masterdata.controller";

const router = express.Router();

router.get("/", MasterDataRouteController);

export default router;