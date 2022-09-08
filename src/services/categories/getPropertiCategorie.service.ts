import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

export const getPropertiCategorieService = async (categorieId: string) => {
  const categorieRepository = AppDataSource.getRepository(Categories);

  const categorie = await categorieRepository.findOneBy({
    id: categorieId,
  });

  if (!categorie) {
    throw new AppError("Invalid Id", 404);
  }

  return categorie;
};
