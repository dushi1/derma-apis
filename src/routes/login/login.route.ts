import express from "express";

import { LoginRouteController } from "../../controllers/login.controller";
import { loginSchema, validateLogin } from './validation.login'

const router = express.Router();

router.post("/", loginSchema, validateLogin, LoginRouteController);

export default router;
