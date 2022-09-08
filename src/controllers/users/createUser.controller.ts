import { Request, Response } from "express";
import { IUser } from "../../interfaces/users";
import { createUserService } from "../../services/users/createrUser.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, isAdm, password } = req.body;

    const userCreated = await createUserService({
      name,
      email,
      isAdm,
      password,
    });

    const newUser: IUser = {
      id: userCreated.id,
      name: userCreated.name,
      email: userCreated.email,
      isAdm: userCreated.isAdm,
      createdAt: userCreated.createdAt,
      updatedAt: userCreated.updatedAt,
      isActive: userCreated.isActive,
    };

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
