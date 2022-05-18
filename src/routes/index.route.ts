import * as express from "express";

import userRoute from "./user/user.route";
import loginRoute from './login/login.route'
import registerRoute from './register/register.route'
import masterRoute from './masterdata/masterdata.route'


const router = express.Router();

router.use("/user", userRoute);
router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/masterdata", masterRoute);


export default router;
