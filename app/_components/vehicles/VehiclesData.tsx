import { VehiclesList } from '@/app/_components/vehicles/VehiclesList';
import { getVehiclesByParams } from '@/app/_lib/services/data-service';

const VehiclesData: React.FC<{ makeId: string; year: string }> = async ({
  makeId,
  year,
}) => {
  const vehiclesData = await getVehiclesByParams({ makeId, year });
  return <VehiclesList vehiclesData={vehiclesData} />;
};

export default VehiclesData;
