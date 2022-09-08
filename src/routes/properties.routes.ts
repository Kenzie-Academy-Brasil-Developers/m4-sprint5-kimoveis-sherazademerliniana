import { Router } from "express";
import { createPropertieController } from "../controllers/properties/createPropetie.controller";
import { getPropertieController } from "../controllers/properties/getProperties.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const propertiesRouter = Router();

propertiesRouter.post(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  createPropertieController
);
propertiesRouter.get("", getPropertieController);
