import { Request, Response } from "express";
import { getPropertiesService } from "../../services/properties/getProperties.service";

export const getPropertieController = async (req: Request, res: Response) => {
  try {
    const properties = await getPropertiesService();

    return res.status(200).send(properties);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
