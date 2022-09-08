import { Router } from "express";
import { createCategorieController } from "../controllers/categories/createCategorie.controller";
import { getCategoriesCrontoller } from "../controllers/categories/getCategories.controller";
import { getPropertiCategorieController } from "../controllers/categories/getPropertiCategorie.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const categoriesRouter = Router();

categoriesRouter.post(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  createCategorieController
);
categoriesRouter.get("/:id/properties", getPropertiCategorieController);
categoriesRouter.get("", getCategoriesCrontoller);
