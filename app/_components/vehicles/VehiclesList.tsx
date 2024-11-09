import Vehicle from '@/app/_components/vehicles/Vehicle';
import { VehicleType } from '@/app/_types/Vehicle';

interface Props {
  vehiclesData: VehicleType[];
}

export const VehiclesList: React.FC<Props> = ({ vehiclesData }) => {
  return (
    <>
      {!!vehiclesData.length ? (
        <ul className="flex flex-wrap gap-5">
          {vehiclesData.map((vehicle) => (
            <Vehicle key={vehicle.Make_ID} vehicle={vehicle} />
          ))}
        </ul>
      ) : (
        <h2 className="~text-xl/2xl text-center">No vehicles found</h2>
      )}
    </>
  );
};
