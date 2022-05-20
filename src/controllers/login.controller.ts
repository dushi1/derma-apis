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

    console.log(findUser);


    if (!findUser) {
        const registeredUser = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values({ uid: req.body.uid, number: req.body.mobile === '' ? null : req.body.mobile })
            .execute()
        res.json({
            token: signUid(req.body.uid),
            user: registeredUser.generatedMaps,
            isFirstFormComplete: false,
            isSecondFormComplete: false,
            newRegisteration: true
        })
    } else {
        res.json({
            token: signUid(req.body.uid),
            user: findUser,
            isFirstFormComplete: findUser.firstForm,
            isSecondFormComplete: findUser.secondForm,
            newRegisteration: false
        })
    }
};

export { LoginRouteController };
