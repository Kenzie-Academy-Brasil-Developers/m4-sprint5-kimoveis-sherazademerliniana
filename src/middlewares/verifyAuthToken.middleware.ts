import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, "SUPER_SECRET", (error: any, decoded: any) => {
      if (error) {
        return res.status(401).send({ message: "Invalid Token" });
      }

      req.user = {
        userId: decoded.id,
        userEmail: decoded.email,
      };

      next();
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
