import { Request, Response } from "express"
import User from "../models/Users.model"

export const getUsers = async (req: Request, res: Response) =>  {
    try {
        const users = await User.findAll();
        res.json(users); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

export const createUser = async (req: Request, res: Response) => {
        
    const userCount = await User.count();
    const user = new User(req.body);
    
    if (userCount >= 5) {
        const oldestUser = await User.findOne({
            order: [['id', 'ASC']],
        });

        if (oldestUser) {
            await oldestUser.destroy();
        }
    }

    // Guardar el nuevo usuario
    const savedUser = await user.save();
    res.status(201).json({ data: savedUser });
}