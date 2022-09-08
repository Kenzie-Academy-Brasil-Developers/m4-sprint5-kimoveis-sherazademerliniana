import { Request, Response } from "express";
import { getUsersService } from "../../services/users/getUsers.service";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const listUsers = await getUsersService();

    return res.status(200).send(listUsers);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.message,
        message: err.message,
      });
    }
  }
};
