import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { createPropertieService } from "../../services/properties/createPropetie.service";

export const createPropertieController = async (
  req: Request,
  res: Response
) => {
  const propRequest: IPropertyRequest = req.body;

  const propCreated = await createPropertieService(
    propRequest,
    propRequest.address
  );

  return res.status(201).send(propCreated);
};
