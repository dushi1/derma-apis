import express from "express";
import application from "../constants/application";
import IRequest from "../types/IRequest";

export default async (
  req: IRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  if (
    application.authorizationIgnorePath.indexOf(`${req.originalUrl}`) === -1
  ) {
  }
  next();
};
