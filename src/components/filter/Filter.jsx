'use client';
import { useState } from 'react';

import Dropdown from './Dropdown';
import FilterButton from './FilterButton';

const Filter = ({ data, years, title, selected, setSelected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex flex-col items-center justify-center gap-2 text-center'>
      <div className='flex w-[100%] gap-[10px]'>
        <div>{title}:</div> <div className='font-bold'>{selected}</div>
      </div>
      <div className='flex items-center justify-center'>
        <input
          value={selected}
          type='text'
          placeholder={placeholder}
          disabled
          className='h-[32px] bg-[#f3f5f6] px-[10px]'
          style={{ borderRadius: '4px 0px 0px 4px' }}
        />
        <FilterButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Dropdown
        data={data}
        years={years}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelected={setSelected}
      />
    </div>
  );
};

export default Filter;
