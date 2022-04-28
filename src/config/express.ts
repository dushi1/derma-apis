import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

require("dotenv").config();

app.use(morgan("dev"));

app.use(helmet());

export default app;
