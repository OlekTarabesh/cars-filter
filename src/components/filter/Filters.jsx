'use client';
import { useEffect, useState } from 'react';

import NextButton from '../NextButton';
import Filter from './Filter';
import Loading from '../Loading';

import { getCars } from '@/api/requests';
import { yearsData } from '@/utils/mokData';

const Filters = () => {
  const [data, setData] = useState([]);
  const [yearSelected, setYearSelected] = useState('');
  const [carSelected, setCarSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getCars();
    if (response) {
      setData(response?.data?.Results);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className='flex w-[100%] flex-wrap justify-center gap-[30px]'>
        <Filter
          data={data}
          title={'Car type'}
          placeholder={'Select a car'}
          selectOptionTitle={'Car'}
          selected={carSelected?.makeName}
          setSelected={setCarSelected}
        />
        <Filter
          years={yearsData}
          title={'Year'}
          placeholder={'Select a year'}
          selectOptionTitle={'Year'}
          selected={yearSelected}
          setSelected={setYearSelected}
        />
      </section>
      <NextButton yearSelected={yearSelected} carSelected={carSelected} />
    </>
  );
};

export default Filters;
