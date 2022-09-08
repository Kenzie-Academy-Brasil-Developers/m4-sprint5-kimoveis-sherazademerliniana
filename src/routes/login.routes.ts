import { Router } from "express";
import { loginUserController } from "../controllers/login/loginUser.controller";

export const loginRouter = Router();

loginRouter.post("", loginUserController);
