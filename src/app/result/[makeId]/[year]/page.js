import { Suspense } from 'react';

import Card from '@/components/Card';
import Loading from '@/components/Loading';

import { getCars, getTypeCars } from '@/api/requests';

export async function generateStaticParams() {
  const cars = await getCars();

  return cars?.data?.Results?.map((car) => ({
    MakeId: car.makeId,
    year: car.year,
  }));
}

const ResultPage = async ({ params }) => {
  const { makeId, year } = params;

  const { data } = await getTypeCars(makeId, year);

  return (
    <>
      <header className='flex justify-center pt-[40px] text-[60px] font-bold'>
        <h1>Result Page</h1>
      </header>
      <section className='grid w-full grid-cols-[repeat(auto-fill,minmax(170px,1fr))] justify-items-center gap-[10px] p-[20px]'>
        <Suspense fallback={<Loading />}>
          {data?.Results?.map((car) => (
            <Card key={car.Make_ID} car={car} />
          ))}
        </Suspense>
      </section>
    </>
  );
};

export default ResultPage;
