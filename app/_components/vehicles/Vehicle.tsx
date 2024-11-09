import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { VehicleType } from '@/app/_types/Vehicle';

interface Props {
  vehicle: VehicleType;
}

const Vehicle: React.FC<Props> = ({ vehicle }) => {
  const { Make_ID, Make_Name, Model_Name } = vehicle;

  return (
    <li className="basis-[calc(25%-20px)] grow min-w-[290px]">
      <Card>
        <CardHeader>
          <CardTitle>{Model_Name}</CardTitle>
          <CardDescription>{Make_Name}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <p>Make ID: {Make_ID}</p>
        </CardFooter>
      </Card>
    </li>
  );
};
export default Vehicle;
