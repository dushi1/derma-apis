import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description: "Derma Cupid Apis",
      license: {
        name: "MIT",
        url: "",
      },
      contact: {
        name: "Derma Cupid",
        url: "https://dermacupid.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["../routes/*.{tj}s", "../routes/**/*.{tj}s", "../config/express.js"],
};

export const specs = swaggerJSDoc(options);
