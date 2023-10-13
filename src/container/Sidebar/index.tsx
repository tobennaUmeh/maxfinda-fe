import React from "react";
import Logo from "../../assets/image/MAXFINDA.jpg";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import posticon from "../../assets/icons/postsIcon.svg";
import settingsIcon from "../../assets/icons/settingsIcon.svg";
import adminIcon from "../../assets/icons/adminIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import helpIcon from "../../assets/icons/helpAndSupport.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";

interface SidebarProps {
  // Define any props specific to the Sidebar component here
}

const Sidebar: React.FC<SidebarProps> = () => {
  const activeClass =
    "text-sidebar-active px-3 hover:bg-slate-100 space-x-1 flex border-l-sidebar-active border-l-4 py-3";

  const normalClass =
    "text-highlight-100 flex px-3 hover:bg-slate-100 space-x-1 border-l-4 border-slate-200 py-3";

  const location = useLocation();
  console.log(location);

  const isActive = (path: string) => {
    // Check if the current location matches the given path
    return location.pathname === path;
  };

  return (
    <div className="w-[20vw] grid grid-cols-1 space-2 grid-rows-6 h-[100vh] bg-sidebar shadow-black drop-shadow-2xl overflow-y-clip sticky top-0">
      <div className="row-span-1 grid justify-center mt-10">
        <img src={Logo} className="w-[10rem]" alt="" />
        <p className="text-highlight-100 text-sm">
          Job Scrapping Management Platform
        </p>
        <div className="">minimize</div>
      </div>
      <div className="row-span-5 mt-10">
        <ul className="flex flex-col w-[100%] text-xl">
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClass : normalClass;
            }}
            to="/dashboard"
          >
            <ReactSVG src={dashboardIcon} className="pr-3" />
            {/* <img
              src={dashboardIcon}
              className="pr-3 fill-sidebar-active"
              alt="dashboardicon"
            /> */}
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClass : normalClass;
            }}
            to="/settings"
          >
            <img src={settingsIcon} className="pr-3" alt="settingsicon" />
            Settings
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClass : normalClass;
            }}
            to="/posts"
          >
            <img src={posticon} className="pr-3" alt="posticon" />
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClass : normalClass;
            }}
            to="/admin"
          >
            <img src={adminIcon} className="pr-3" alt="adminicon" />
            Admin
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClass : normalClass;
            }}
            to="/login"
          >
            <img src={logoutIcon} className="pr-3" alt="logouticon" />
            Logout
          </NavLink>
        </ul>
      </div>
      <Link
        className="row-span-1 text-sidebar-active flex align-middle px-3 hover:bg-slate-200 space-x-1 border-l-4  border-slate-200 py-3 text-lg"
        to="/login"
      >
        <img src={helpIcon} className="pr-3 w-[2rem]" alt="logouticon" />
        Help & Center
      </Link>
    </div>
  );
};

export default Sidebar;
