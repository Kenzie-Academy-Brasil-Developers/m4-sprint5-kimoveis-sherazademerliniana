import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { getUsersController } from "../controllers/users/getUsers.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyIsAdmMiddleware } from "../middlewares/verifyIsAdm.middleware";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  getUsersController
);
userRouter.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);
