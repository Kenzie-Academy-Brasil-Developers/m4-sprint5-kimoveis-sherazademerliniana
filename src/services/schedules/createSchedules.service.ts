import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedulesUsers.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

export const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  let data = new Date(date);

  if (data.getDay() === 0 || data.getDay() === 6) {
    throw new AppError("Invalid date");
  }

  if (
    parseInt(hour.substring(0, 2)) < 8 ||
    parseInt(hour.substring(0, 2)) > 18
  ) {
    throw new AppError("Invalid hour");
  }

  const propertieRepository = AppDataSource.getRepository(Properties);

  const findPropertie = await propertieRepository.findOneBy({
    id: propertyId,
  });

  if (!findPropertie) {
    throw new AppError("Invalid id", 404);
  }
  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const findAlreadyPropertie = await schedulesRepository.findOneBy({
    property: { id: propertyId },
  });

  if (findAlreadyPropertie) {
    throw new AppError("Invalid Schedule", 400);
  }

  const newSchedule = schedulesRepository.create({
    date,
    hour,
    property: { id: propertyId },
    user: { id: userId },
  });

  await schedulesRepository.save(newSchedule);

  return newSchedule;
};
