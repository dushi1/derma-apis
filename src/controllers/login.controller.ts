import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import HttpStatus from "http-status-codes";
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
        if (mobile) {
            const findMobile = await getConnection()
                .getRepository(User)
                .createQueryBuilder("user")
                .where("user.number = :id", { id: mobile })
                .getOne()
            if (findMobile) {
                res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
                    errors: {
                        mobile: {
                            message: "Number already in use"
                        }
                    }
                })
            } else {
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
                    token: signUid(req.body.uid),
                    user: user,
                    newRegisteration: true
                })
            }
        } else {
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
                token: signUid(req.body.uid),
                user: user,
                newRegisteration: true
            })
        }
    } else {
        res.json({
            token: signUid(req.body.uid),
            user: findUser,
            newRegisteration: false
        })
    }
};

export { LoginRouteController };
