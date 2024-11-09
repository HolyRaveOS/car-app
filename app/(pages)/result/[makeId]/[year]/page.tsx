import { Button } from '@/app/_components/ui/button';
import { Skeleton } from '@/app/_components/ui/skeleton';
import VehiclesData from '@/app/_components/vehicles/VehiclesData';
import { getVehiclesParams } from '@/app/_lib/services/data-service';
import { getYears } from '@/app/_lib/utils';
import { Routes } from '@/app/enums/routes';
import Link from 'next/link';
import { Suspense } from 'react';

interface Props {
  params: {
    makeId: string;
    year: string;
  };
}

export async function generateStaticParams() {
  const vehiclesParamsData = await getVehiclesParams();
  const years = getYears();

  const params = vehiclesParamsData.flatMap((vehicle) => {
    return years.map((year) => ({
      makeId: vehicle.MakeId.toString(),
      year: year.toString(),
    }));
  });

  return params.map(({ makeId, year }) => ({
    makeId,
    year,
  }));
}
const Page: React.FC<Props> = ({ params }) => {
  const { makeId, year } = params;

  return (
    <div>
      <div className="container py-10">
        <div className="~mb-5/10">
          <Link href={Routes.Home} className="~mb-5/10 block">
            <Button>Back</Button>
          </Link>
          <h1 className="~text-2xl/5xl text-center flex-grow">Vehicles</h1>
        </div>

        <Suspense
          fallback={
            <div className="flex flex-wrap gap-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="basis-[calc(25%-20px)] grow min-w-[290px] h-[172px]"
                />
              ))}
            </div>
          }
        >
          <VehiclesData makeId={makeId} year={year} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
