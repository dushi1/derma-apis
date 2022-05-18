import express from "express";
import application from "../constants/application";
import IRequest from "../types/IRequest";

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} _res
 * @param {function} next
 *
 */


export default async (
  req: IRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  if (
    application.authorizationIgnorePath.indexOf(`${req.originalUrl}`) === -1
  ) {
    if (req.headers.authorization) {

    }
    // if (req.headers.authorization) {
    //   return req.headers.authorization;
    // }
  }
  next();
};
