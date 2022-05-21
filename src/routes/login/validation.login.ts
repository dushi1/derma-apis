import { body, validationResult } from 'express-validator'
import express from 'express'
import { User } from '../../entity/user.entity';
import { getConnection } from 'typeorm';

const loginSchema = [
    body('uid').not().isEmpty().withMessage('Please provide a correct uid.'),
    // body('mobile').custom(async (value) => {
    //     if (value) {
    //         const findMobile = await getConnection()
    //             .getRepository(User)
    //             .createQueryBuilder("user")
    //             .where("user.number = :id", { id: value })
    //             .getOne()
    //         if (findMobile) {
    //             throw new Error('Mobile number already in use.');
    //         }
    //     }
    // })
]

const validateLogin = (req: express.Request, res: any, next: express.NextFunction) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    next()
}

export { loginSchema, validateLogin }

