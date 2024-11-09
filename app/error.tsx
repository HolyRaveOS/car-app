'use client';

import { Button } from '@/app/_components/ui/button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-10 min-h-[80vh] flex items-center justify-center">
      <div className="container">
        <h1 className="~text-2xl/5xl text-center mb-10">
          Something went wrong!
        </h1>
        <Button className="block mx-auto" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
