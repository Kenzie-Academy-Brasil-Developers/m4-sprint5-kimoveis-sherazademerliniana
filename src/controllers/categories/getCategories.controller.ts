import { Request, Response } from "express";
import { getCategoriesService } from "../../services/categories/getCategories.service";

export const getCategoriesCrontoller = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesService();

    return res.status(200).send(categories);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        messsage: err.message,
      });
    }
  }
};
