import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import * as bycrypt from "bcryptjs";

export const createUserService = async ({
  name,
  email,
  isAdm,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(Users);

  const hashedPassword = await bycrypt.hash(password, 10);

  const user = new Users();
  user.name = name;
  user.email = email;
  user.isAdm = isAdm;
  user.password = hashedPassword;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};
