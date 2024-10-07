const DataValues = ({ title, onClick }) => {
  return (
    <li
      className='flex h-[30px] flex-col justify-center hover:cursor-pointer hover:bg-[#b9b8b8] first:hover:rounded-t last:hover:rounded-b'
      onClick={onClick}
    >
      {title}
    </li>
  );
};

export default DataValues;
