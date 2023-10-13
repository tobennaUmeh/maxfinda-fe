import { ReactSVG } from "react-svg";
import { Text } from "../../../components/text/Text";
import NotificationIcon from "../../../assets/icons/notificationIcon.svg";
import UserImg from "../../../assets/image/UserImg.png";
// import Sesrch from "../../../assets/icons/search.svg";

interface WelcomeBarProps {
  name?: string;
  img?: unknown;
}

const WelcomeBar = ({ name = "Ini" }: WelcomeBarProps) => {
  return (
    <div className="grid grid-cols-12 mb-2 gap-3">
      <div className="flex justify-between col-span-9 mr-4">
        <div className="">
          <p className="leading-[0.5rem] font-thin">Hi {name}</p>
          <Text
            text="Welcome to Maxfinda"
            style="text-sidebar-active text-xl"
          />
        </div>
        <div className="flex items-center">
          <ReactSVG src={NotificationIcon} className="mr-2 cursor-pointer" />
          <img
            className="w-7 h-7 cursor-pointer"
            src={UserImg}
            alt="User icon"
          />
        </div>
      </div>
      <div className="flex col-span-3">
        <input
          type="text"
          placeholder="Search"
          className="rounded-full pl-5 w-full"
        />
      </div>
    </div>
  );
};

export default WelcomeBar;
