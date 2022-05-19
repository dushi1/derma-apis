import { Request, Response } from "express";
import { AppDataSource } from "../index";
import { User } from "../entity/user.entity";
import HttpStatus from 'http-status-codes'


const RegisterFirstFormController = async (req: Request, res: Response) => {
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
    const updatedUser = await AppDataSource
        .createQueryBuilder()
        .update(User)
        .set({
            name: req.body.name, email: req.body.email, firstForm: true,
            dob: req.body.dob, gender: req.body.gender,
            privacy: req.body.privacy, skin: req.body.privacy
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
        res.status(HttpStatus.ACCEPTED).send({
            status: 'Success',
            message: 'User updated',
            user: updatedUser,
        });
    }

};

const RegisterSecondFormController = async (req: Request, res: Response) => {
    const updatedUser = await AppDataSource
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
        res.status(HttpStatus.OK).send({
            status: 'Success',
            message: 'User updated',
            user: updatedUser,
        });
    }
};

export { RegisterFirstFormController, RegisterSecondFormController };