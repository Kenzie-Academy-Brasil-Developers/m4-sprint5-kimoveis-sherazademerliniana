import { Router } from "express";
import { createScheduleController } from "../controllers/schedules/createSchedules.controller";
import { getScheduleController } from "../controllers/schedules/getSchedules.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const schedulesRouter = Router();

schedulesRouter.post("", verifyAuthTokenMiddleware, createScheduleController);
schedulesRouter.get(
  "/properties/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  getScheduleController
);
