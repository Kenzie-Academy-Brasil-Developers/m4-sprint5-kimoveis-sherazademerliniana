import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import { createScheduleService } from "../../services/schedules/createSchedules.service";

export const createScheduleController = async (req: Request, res: Response) => {
  const { date, hour, propertyId }: IScheduleRequest = req.body;
  const { userId } = req.user;

  const scheduleCreated = await createScheduleService({
    date,
    hour,
    propertyId,
    userId,
  });

  return res.status(201).send({ message: "Schedule Created" });
};
