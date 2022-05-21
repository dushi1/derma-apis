import { body, validationResult } from 'express-validator'
import express from 'express'
import { getConnection } from 'typeorm';
import { User } from '../../entity/user.entity';

const regiterSchemaFirstForm = [
    body('gender').not().isEmpty().withMessage('Gender is required.'),
    body('dob').not().isEmpty().withMessage('Date of birth is required.'),
    body('name').not().isEmpty().withMessage('Name is required.'),
    body('email').not().isEmpty().withMessage('Email is required.').custom(async (value) => {
        if (value) {
            const findMobile = await getConnection()
                .getRepository(User)
                .createQueryBuilder("user")
                .where("user.email = :id", { id: value })
                .getOne()
            if (findMobile) {
                throw new Error('Email id already in use.');
            }
        }
    }),
    body('skin').not().isEmpty().withMessage('Skin condition is required.'),
    body('privacy').not().isEmpty().withMessage('Privacy is required.')
]

const registerSchemaSecondForm = [
    body('country').not().isEmpty().withMessage('Country is required.'),
    body('state').not().isEmpty().withMessage('State is required.'),
    body('city').not().isEmpty().withMessage('City is required.'),
    body('education').not().isEmpty().withMessage('Education is required.'),
    body('highesteducation').not().isEmpty().withMessage('Highest education is required.'),
    body('profession').not().isEmpty().withMessage('Profession is required.'),
    body('drink').not().isEmpty().withMessage('Drink is required.'),
    body('smoke').not().isEmpty().withMessage('Smoke is required.'),
    body('marital').not().isEmpty().withMessage('Marital status is required.'),
    body('religion').not().isEmpty().withMessage('Religion is required.'),
]

const validateLoginFirstForm = (req: express.Request, res: any, next: express.NextFunction) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    next()
}

const validateLoginSecondForm = (req: express.Request, res: any, next: express.NextFunction) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    next()
}

export { regiterSchemaFirstForm, registerSchemaSecondForm, validateLoginFirstForm, validateLoginSecondForm }