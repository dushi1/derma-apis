import { body, validationResult } from 'express-validator'
import express from 'express'

const loginSchema = [
    body('uid').not().isEmpty().withMessage('Please provide a correct uid.')
]

const validateLogin = (req: express.Request, res: any, next: express.NextFunction) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    next()
}

export { loginSchema, validateLogin }

