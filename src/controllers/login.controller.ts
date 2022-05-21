import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { signUid } from "../utilities/encryptionUtils";

const LoginRouteController = async (req: Request, res: Response) => {

    const findUser = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.uid = :id", { id: req.body.uid })
        .getOne()

    const mobile = req.body.mobile ? req.body.mobile : null

    if (!findUser) {
        const registeredUser = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values({ number: mobile, uid: req.body.uid })
            .execute()

        const user = await getConnection()
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.uid = :id", { id: req.body.uid })
            .getOne()

        res.json({
            token: `Bearer ${signUid(req.body.uid)}`,
            user: user,
            newRegisteration: true
        })
    } else {
        res.json({
            token: `Bearer ${signUid(req.body.uid)}`,
            user: findUser,
            newRegisteration: false
        })
    }
};

export { LoginRouteController };
