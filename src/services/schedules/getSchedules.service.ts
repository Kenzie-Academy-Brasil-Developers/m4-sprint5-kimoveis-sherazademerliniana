import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/schedulesUsers.entity";
import { AppError } from "../../errors/AppError";

export const getScheduleService = async (id: string) => {
  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const findSchedule = await schedulesRepository.findOneBy({
    property: { id: id },
  });

  if (!findSchedule) {
    throw new AppError("Invalid id", 404);
  }

  return findSchedule;
};
