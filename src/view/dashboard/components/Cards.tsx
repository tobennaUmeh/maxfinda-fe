const Cards = () => {
  return (
    <div className="grid grid-cols-9 gap2">
      <div className="col-span-3 bg-white rounded-xl">
        <nav className="grid p-1 grid-cols-1">
          <div className="text-gray-500 rounded-lg text-md h-10 flex my-2 px-4 items-center hover:bg-gray-100  cursor-pointer hover:border hover:text-black hover:border-gray-300 mr-2 text-lg">
            <span className="h-[80%] rounded w-[8px] bg-[#015433] mr-2"></span>
            <p className="">Monitored Pages</p>
            <p className="">350</p>
          </div>
        </nav>
      </div>
      <div className="col-span-3"></div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Cards;
