import express from 'express'
import HttpStatusCode from 'http-status-codes'

export interface IError {
    status?: number;
    code?: number;
    message?: string;
}

/**
 * NOT FOUND 404 Error handler
 * @param {object} req   
 * @param {object} res 
 * @param {function} next 
 */

const NotFoundHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(HttpStatusCode.NOT_FOUND).json({
        success: false,
        error: {
            code: HttpStatusCode.NOT_FOUND,
            message: HttpStatusCode.getStatusText(HttpStatusCode.NOT_FOUND)
        }
    })
}


/**
 * Error handler
 * @param {object} err
 * @param {object} req   
 * @param {object} res 
 * @param {function} next 
 */


const ErrorHandler = (err: IError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: {
            code: err.code || HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: err.message || HttpStatusCode.getStatusText(HttpStatusCode.INTERNAL_SERVER_ERROR)
        }
    })
}

export { NotFoundHandler, ErrorHandler }