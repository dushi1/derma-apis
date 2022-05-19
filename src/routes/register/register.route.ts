import express from "express";

import {
    RegisterFirstFormController,
    RegisterSecondFormController
} from "../../controllers/register.controller";
import {
    registerSchemaSecondForm, regiterSchemaFirstForm,
    validateLoginFirstForm, validateLoginSecondForm
} from './validation.register'

const router = express.Router();

router.post("/first", regiterSchemaFirstForm, validateLoginFirstForm, RegisterFirstFormController);
router.post("/second", registerSchemaSecondForm, validateLoginSecondForm, RegisterSecondFormController);

export default router;