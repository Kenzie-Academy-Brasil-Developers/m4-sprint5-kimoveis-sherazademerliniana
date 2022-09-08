import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const userFind = users.find((user) => user.id === id);

  if (!userFind) {
    throw new AppError("User not exists", 404);
  }

  if (userFind.isActive === false) {
    throw new AppError("User already deleted", 400);
  }

  await userRepository.update(id, { isActive: false });
};
