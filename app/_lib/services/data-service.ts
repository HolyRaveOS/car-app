import { client } from '@/app/_lib/fetchClient';
import { VehicleType } from '@/app/_types/Vehicle';
import { VehicleParams } from '@/app/_types/VehicleParams';

export const getVehiclesParams = async () => {
  const response = await client.get<{ Results: VehicleParams[] }>(
    '/vehicles/GetMakesForVehicleType/car?format=json',
  );
  return response.Results;
};

export const getVehiclesByParams = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  const response = await client.get<{ Results: VehicleType[] }>(
    `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  return response.Results;
};
