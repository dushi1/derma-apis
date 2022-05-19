import { Request, Response } from "express";
import { AppDataSource } from "../index";
import { User } from "../entity/user.entity";
import { signUid } from "../utilities/encryptionUtils";

const LoginRouteController = async (req: Request, res: Response) => {

    const findUser = await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.uid = :id", { id: req.body.uid })
        .getOne()

    if (findUser === null) {
        const registeredUser = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(User)
            .values({ uid: req.body.uid, number: req.body.mobile === '' ? null : req.body.mobile })
            .execute()
        res.json({
            token: signUid(req.body.uid),
            user: registeredUser.generatedMaps,
            isFirstFormComplete: false,
            isSecondFormComplete: false
        })
    } else {
        res.json({
            token: signUid(req.body.uid),
            user: findUser,
            isFirstFormComplete: findUser.firstForm,
            isSecondFormComplete: findUser.secondForm
        })
    }
};

export { LoginRouteController };
