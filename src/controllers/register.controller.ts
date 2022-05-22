import { Request, Response } from "express";
// import { AppDataSource } from "../index";
import { User } from "../entity/user.entity";
import HttpStatus from 'http-status-codes'
import { getConnection } from "typeorm";
import IRequest from "../types/IRequest";


const RegisterFirstFormController = async (req: IRequest, res: Response) => {
    // console.log(req.body);
    // const ageCalc = (date: string) => {
    //     const today = new Date()
    //     const [day, month, year]: any = date.split('-')
    //     var age = today.getFullYear() - parseInt(year)
    //     const diff = today.getMonth() - parseInt(month)
    //     if (diff < 0 || (diff === 0 && today.getDate() < parseInt(day))) {
    //         age--;
    //     }
    //     return age
    // }
    // const age = ageCalc(req.body.age)
    const updatedUser = await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
            name: req.body.name, email: req.body.email, firstForm: true,
            dob: req.body.dob, gender: req.body.gender,
            privacy: req.body.privacy, skin: req.body.privacy
        })
        .where("uid = :uid", { uid: req.uid })
        .execute()
    if (updatedUser.affected === 0) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({
            status: 'Failed',
            message: 'Failed to update user',
        });
    } else {
        const user = await getConnection()
            .getRepository(User)
            .createQueryBuilder("user")
            //@ts-ignore
            .where("user.uid = :id", { id: req.uid })
            .getOne()
        res.status(HttpStatus.ACCEPTED).send({
            status: 'Success',
            message: 'User updated',
            user: user,
        });
    }

};

const RegisterSecondFormController = async (req: IRequest, res: Response) => {
    const updatedUser = await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
            country: req.body.country, state: req.body.state, secondForm: true,
            city: req.body.city, education: req.body.education,
            highestEdu: req.body.highesteducation, profession: req.body.profession,
            drink: req.body.drink, smoke: req.body.smoke, marital: req.body.marital,
            religion: req.body.religion
        })
        //@ts-ignore
        .where("uid = :uid", { uid: req.uid })
        .execute()
    if (updatedUser.affected === 0) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({
            status: 'Failed',
            message: 'Failed to update user',
        });
    } else {
        const user = await getConnection()
            .getRepository(User)
            .createQueryBuilder("user")
            //@ts-ignore
            .where("user.uid = :id", { id: req.uid })
            .getOne()
        res.status(HttpStatus.OK).send({
            status: 'Success',
            message: 'User updated',
            user: user,
        });
    }
};

export { RegisterFirstFormController, RegisterSecondFormController };