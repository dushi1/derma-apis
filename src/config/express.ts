import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import router from "../routes/index.route";

const app = express();

require("dotenv").config();

app.use(morgan("dev"));

app.use(helmet());

app.use(router);

export default app;
