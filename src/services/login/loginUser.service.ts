import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUserService = async (userLogin: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const userFind = users.find((user) => user.email === userLogin.email);

  if (!userFind) {
    throw new Error("Wrong email/password");
  }

  if (!userFind.isActive) {
    throw new Error("Invalid User");
  }

  const passwordMatch = bcrypt.compareSync(
    userLogin.password,
    userFind.password
  );

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    { id: userFind.id, email: userLogin.email },
    "SUPER_SECRET",
    {
      expiresIn: "24h",
    }
  );

  return token;
};
