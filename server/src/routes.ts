import { Router } from "express";
import { createUser, getUsers } from "./handlers/users";
import { body } from 'express-validator'
import User from "./models/Users.model";


const router = Router()

router.get('/users', getUsers)

//router.post('/user',createUser)

router.post('/users',
    body('name')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .custom(async (value) => {
            const existingUser = await User.findOne({ where: { name: value } });
            if (existingUser) {
                throw new Error('Nombre ya en uso');
            }
        }),
    createUser
)


export default router