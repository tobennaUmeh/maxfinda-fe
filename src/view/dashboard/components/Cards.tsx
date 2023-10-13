import { ReactSVG } from "react-svg";
import Monitored from "../../../assets/icons/monitoredPages.svg";
import Scrapped from "../../../assets/icons/scrappedPost.svg";
import Jobs from "../../../assets/icons/relatedJobs.svg";

type CardType = {
  name: string;
  icon: string;
  color: string;
  amount: number;
}[];

const Cards = () => {
  const cardsdata: CardType = [
    {
      name: "Monitored Pages",
      icon: Monitored,
      color: "#927BFF",
      amount: 300,
    },
    {
      name: "Scrapped Posts",
      icon: Scrapped,
      color: "#FFD168",
      amount: 100,
    },
    {
      name: "Related Jobs",
      icon: Jobs,
      color: "#6BCAFA",
      amount: 50,
    },
  ];
  return (
    <div className="grid grid-cols-9 gap-3">
      {cardsdata.map((card, i) => {
        const colorClass = () => card.color;
        // bg-[#927BFF] bg-[#FFD168] bg-[#6BCAFA]
        const spanClass = `h-[100%] rounded w-[8px] bg-[${colorClass()}] mr-2`;

        return (
          <div key={i} className="col-span-3 bg-white rounded-xl">
            <nav className="grid p-1 grid-cols-1">
              <div className="text-gray-500 rounded-lg flex my-4 px-3 cursor-pointer text-lg">
                <span className={spanClass}></span>
                <div className="w-[80%]">
                  <p className="leading-3">{card.name}</p>
                  <p className="leading-6 text-2xl mt-2">{card.amount}</p>
                </div>
                <ReactSVG src={card.icon} className="align-top h-full" />
              </div>
              <div className="text-gray-500 rounded-lg flex my-1 px-3 cursor-pointer text-md">
                Since last week
              </div>
            </nav>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
