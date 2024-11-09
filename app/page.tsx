import SelectVehiclesParameters from '@/app/_components/SelectVehiclesParameters';
import { getVehiclesParams } from '@/app/_lib/services/data-service';

const Home: React.FC = async () => {
  const vehiclesParamsData = await getVehiclesParams();

  return (
    <div className="py-10">
      <div className="container">
        <h1 className="~text-2xl/5xl text-center mb-10">
          Select vehicles parameters
        </h1>
        <SelectVehiclesParameters vehiclesParamsData={vehiclesParamsData} />
      </div>
    </div>
  );
};
export default Home;
