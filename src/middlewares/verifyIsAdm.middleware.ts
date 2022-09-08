import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";

export const verifyIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userRepository = AppDataSource.getRepository(Users);

    const findUser = await userRepository.findOneBy({
      id: req.user.userId,
    });

    if (!findUser?.isAdm) {
      return res.status(403).json({ message: "User not is adm" });
    }

    next();
  } catch (err) {
    return res.status(400).send(err);
  }
};
