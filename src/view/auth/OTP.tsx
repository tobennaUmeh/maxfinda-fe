import { AuthLayout } from "../layout/AuthLayout.tsx";
import { BaseInput } from "../../components/input/BaseInput.tsx";
import React from "react";
import img from "../../assets/image/forgotPass.png";
import { Button } from "../../components/button/Button.tsx";
import { Text } from "../../components/text/Text.tsx";

export const OTP: React.FC = () => {
  document.title = "Login | MAXFINDA";
  const LoginImage = new Image();
  LoginImage.src = img;
  const email = "Persons email";
  return (
    <AuthLayout icon={LoginImage}>
      <>
        <Text text="Enter OPT Code" style="text-3xl text-sidebar-active" />
        <Text
          text={`Enter the Five Digit code sent to you email ${email}`}
          style="text-md mt-3 font-thin text-xl font-[Montserrat]"
        />
        <BaseInput
          type="text"
          placeholder={"Input your email address"}
          label={"Email address"}
        />
        <Button text="Retrieve" />
      </>
    </AuthLayout>
  );
};
