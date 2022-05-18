import { Request, Response } from "express";

const RegisterRouteController = (req: Request, res: Response) => {
    res.send("Register Route Controller");
};

export { RegisterRouteController };