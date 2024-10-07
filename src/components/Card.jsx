const Card = ({ car }) => {
  return (
    <ul
      className='flex w-full flex-col gap-[10px] rounded-sm p-[10px]'
      style={{
        border: '1px solid #000',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      }}
    >
      <span className='font-bold'>Car Results</span>
      <li>Model ID: {car.Model_ID}</li>
      <li>Car: {car.Make_Name}</li>
      <li>Model: {car.Model_Name}</li>
    </ul>
  );
};

export default Card;
