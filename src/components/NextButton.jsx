import Link from 'next/link';
import React from 'react';

const NextButton = ({ yearSelected, carSelected }) => {
  const disabledBtn = yearSelected === '' || carSelected === '';
  return (
    <Link
      href={disabledBtn ? '' : `result/${carSelected.makeId}/${yearSelected}`}
    >
      <button
        disabled={disabledBtn}
        className={`h-[34px] w-[150px] rounded-[5px] bg-[#cacaca] ${disabledBtn ? 'opacity-[0.6]' : 'opacity-[1]'}`}
      >
        Next
      </button>
    </Link>
  );
};

export default NextButton;
