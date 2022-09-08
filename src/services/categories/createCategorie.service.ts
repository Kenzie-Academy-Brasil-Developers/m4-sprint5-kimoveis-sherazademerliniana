import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

export const createCategorieService = async (categorie: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = new Categories();
  category.name = categorie.name;

  categoryRepository.create(category);

  await categoryRepository.save(category);

  return category;
};
