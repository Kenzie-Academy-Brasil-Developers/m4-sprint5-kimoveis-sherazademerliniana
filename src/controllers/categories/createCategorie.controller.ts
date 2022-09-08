import { Request, Response } from "express";
import { createCategorieService } from "../../services/categories/createCategorie.service";

export const createCategorieController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name } = req.body;

    const category = await createCategorieService({ name });

    return res.status(201).send(category);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
