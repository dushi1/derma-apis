import express from "express";
import HttpStatus from "http-status-codes";
import { verifyUid } from "../utilities/encryptionUtils";
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
      const token = await verifyUid(req.headers.authorization.split(' ')[1])
      //@ts-ignore
      req.uid = token.uid
    }
    else {
      res.status(HttpStatus.FORBIDDEN).json({
        status: HttpStatus.getStatusText(HttpStatus.FORBIDDEN)
      })
    }
  }
  next();
};
