import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";

export const getUsersService = async () => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = userRepository.find({
    select: {
      id: true,
      name: true,
      email: true,
      isAdm: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return users;
};
