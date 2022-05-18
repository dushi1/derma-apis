import express from "express";
import morgan from "morgan";
import authenticate from "../middleware/authenticate";
import { NotFoundHandler, ErrorHandler } from "../middleware/errorHandler";
import application from "../constants/application";
// import helmet from "helmet";
// import swaggerUi from "swagger-ui-express";
// import { specs } from "../apidoc/documentaion";
import router from "../routes/index.route";



const app = express();

app.use(express.json())

require("dotenv").config();

app.use(morgan("dev"));

app.use(authenticate)

app.use(application.url.base1, router);

app.use(NotFoundHandler)

app.use(ErrorHandler)

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
