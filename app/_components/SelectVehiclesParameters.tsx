'use client';

import { Button } from '@/app/_components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import { getYears } from '@/app/_lib/utils';
import { VehicleParams } from '@/app/_types/VehicleParams';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  vehiclesParamsData: VehicleParams[];
}

const SelectVehiclesParameters: React.FC<Props> = ({ vehiclesParamsData }) => {
  const [makeId, setMakeId] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const years = getYears();

  const canNavigate = makeId && year;
  const navigateUrl = `/result/${makeId}/${year}`;
  return (
    <div>
      <div className="flex gap-6 justify-center mb-10 md:flex-col items-center">
        <Select onValueChange={setMakeId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select vehicle model" />
          </SelectTrigger>
          <SelectContent>
            {vehiclesParamsData.map((vehicle) => (
              <SelectItem
                key={vehicle.MakeId}
                value={vehicle.MakeId.toString()}
              >
                {vehicle.MakeName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setYear}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select vehicle year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Link href={navigateUrl}>
        <Button disabled={!canNavigate} className="block mx-auto">
          Next
        </Button>
      </Link>
    </div>
  );
};
export default SelectVehiclesParameters;
