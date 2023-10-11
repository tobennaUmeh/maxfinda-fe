import { AuthLayout } from "../layout/AuthLayout.tsx";
import { BaseInput } from "../../components/input/BaseInput.tsx";
import React from "react";
import image from "../../assets/image/loginImage.png";
import { Button } from "../../components/button/Button.tsx";
import { Text } from "../../components/text/Text.tsx";

export const LoginView: React.FC = () => {
  document.title = "Login | MAXFINDA";
  const LoginImage = new Image();
  LoginImage.src = image;
  return (
    <AuthLayout icon={LoginImage}>
      <>
        <Text text="Welcome to Maxfinda" style="text-3xl text-sidebar-active" />
        <BaseInput
          type="text"
          placeholder={"Input your username"}
          label={"Username"}
        />
        <BaseInput
          type="password"
          placeholder={"Input your password"}
          label={"Password"}
        />
        {/* <div className="flex">
          <div className="">
            <label for="keepSignedIn"></label>
            <input name="keepSignedIn" type="radio" />
          </div>
          <div className=""></div>
        </div> */}
        <Button text="Log in" />
      </>
    </AuthLayout>
  );
};
