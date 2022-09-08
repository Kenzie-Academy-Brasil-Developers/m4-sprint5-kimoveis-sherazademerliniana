import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";

export const createPropertieService = async (
  { value, size, address, categoryId }: IPropertyRequest,
  { city, district, zipCode, state, number }: IAddressRequest
) => {
  if (zipCode.length > 8) {
    throw new AppError("Invalid Zip Code");
  } else if (state.length > 2) {
    throw new AppError("Invalid State");
  }
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryFind = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!categoryFind) {
    throw new AppError("Invalid Id", 404);
  }
  const addressRepository = AppDataSource.getRepository(Addresses);

  const addressFind = await addressRepository.findOneBy({
    zipCode: zipCode,
  });

  if (addressFind) {
    throw new AppError("Invalid address", 400);
  }

  const newAdress = addressRepository.create({
    city,
    district,
    state,
    number,
    zipCode,
  });

  await addressRepository.save(newAdress);

  const propertieRepository = AppDataSource.getRepository(Properties);

  const newPropertie = propertieRepository.create({
    value,
    size,
    address: { id: newAdress.id },
    category: { id: categoryId },
  });

  await propertieRepository.save(newPropertie);

  newPropertie.address = newAdress;

  return newPropertie;
};
