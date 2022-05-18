import { Request, Response } from "express";

const UserRouteController = (req: Request, res: Response) => {
  res.send("User Route Controller");
};

export { UserRouteController };
