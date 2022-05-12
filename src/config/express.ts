import express from "express";
import morgan from "morgan";
// import helmet from "helmet";
// import swaggerUi from "swagger-ui-express";
// import { specs } from "../apidoc/documentaion";
import router from "../routes/index.route";

const app = express();

require("dotenv").config();
// app.use(helmet());
app.use(morgan("dev"));

app.use(router);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
