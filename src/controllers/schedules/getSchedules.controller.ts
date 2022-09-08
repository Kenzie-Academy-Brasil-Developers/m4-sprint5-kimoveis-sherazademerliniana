import { Request, Response } from "express";
import { getScheduleService } from "../../services/schedules/getSchedules.service";

export const getScheduleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const schedule = await getScheduleService(id);

  return res.status(200).send({ schedules: [schedule] });
};
