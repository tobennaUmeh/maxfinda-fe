import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
  icon?: HTMLImageElement;
}

export const AuthLayout = ({ children, icon }: AuthLayoutProps) => {
  return (
    <div className="w-full bg-white bg-contain flex h-[100vh]">
      <div className="w-1/2 m-auto mt-20 h-[100%] pt-10">
        <div className="w-[80%]">
          {children} {/* Render children as ReactNode */}
        </div>
      </div>
      <div className="w-[35%] grid items-center justify-center bg-login-100">
        {icon && <img src={icon.src} alt="Icon" />}
      </div>
    </div>
  );
};
