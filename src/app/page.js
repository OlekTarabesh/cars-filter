import { Suspense } from 'react';

import Loading from '@/components/Loading';
import Filters from '@/components/filter/Filters';

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className='flex h-[100%] flex-col items-center justify-center gap-[100px] pt-[40px]'>
        <header className='flex items-center justify-center text-[60px] font-bold max-md:text-[40px]'>
          <h1>Cars Filter Page</h1>
        </header>
        <Filters />
      </main>
    </Suspense>
  );
}
