import Image from 'next/image';
import arrow from '../../assets/arrow.svg';

const FilterButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className='relative flex h-[32px] w-[40px] items-center justify-center border-none bg-[#bebebe]'
      style={{ borderRadius: '0 4px 4px 0' }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Image
        className={`w-[15px]`}
        style={{
          transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)',
          transition: 'ease-in 0.2s',
        }}
        src={arrow}
        alt=''
      />
    </button>
  );
};

export default FilterButton;
