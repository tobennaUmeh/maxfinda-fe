import React from "react";

interface AuthLayoutProps {
    children?: React.JSX.Element
}
export const AuthLayout = ({children}: AuthLayoutProps) => {
  return(
      <div
        className={"w-full hv bg-onboarding bg-contain pt-10 pl-10 "}
      >
          <img src={"src/assets/image/logo.svg"}  alt={"logo"}/>
          <div
            className={" w-1/2 m-auto mt-20 h-[80%] flex justify-center pt-10"}
          >
              <div
                className={"text-center w-1/2"}
              >
                  <h2
                      className={"font-medium text-[48px] leading-[65px]"}
                  >Welcome back!</h2>

                  <h2
                      className={"font-bold text-[28px] leading-[25px] text-[#7A7A7A]"}
                  >Login to your account</h2>

                  {children}

              </div>
        </div>
      </div>
  )
}