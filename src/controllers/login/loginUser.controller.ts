import { Request, Response } from "express";
import { loginUserService } from "../../services/login/loginUser.service";

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await loginUserService({ email, password });

    return res.status(200).json({ token: token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(403).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
