import { Request, Response } from "express";
import { getPropertiCategorieService } from "../../services/categories/getPropertiCategorie.service";

export const getPropertiCategorieController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const categorie = await getPropertiCategorieService(id);

    return res.status(200).send(categorie);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({ message: err.message });
    }
  }
};
