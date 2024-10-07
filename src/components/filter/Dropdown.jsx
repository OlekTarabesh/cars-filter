'use client';
import DataValues from './DataValues';

const Dropdown = ({ data, years, isOpen, setIsOpen, setSelected }) => {
  const selectFilterHandler = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <ul
      className='absolute left-0 top-[70px] z-[2] h-[300px] w-[190px] list-none overflow-y-scroll rounded-md border-none bg-[#f3f5f6] p-0 text-center shadow-[0px_6px_24px_rgba(0,0,0,0.05),_0px_0px_0px_1px_rgba(0,0,0,0.08)]'
      style={{
        display: isOpen ? 'block' : 'none',
      }}
    >
      {data &&
        data?.map((car) => (
          <DataValues
            key={car.MakeId}
            title={car?.MakeName}
            onClick={() =>
              selectFilterHandler({
                makeName: car?.MakeName,
                makeId: car?.MakeId,
              })
            }
          />
        ))}
      {years &&
        years?.map((year, i) => (
          <DataValues
            key={i}
            title={year}
            onClick={() => selectFilterHandler(year)}
          />
        ))}
    </ul>
  );
};

export default Dropdown;
