import { AuthLayout } from "../layout/AuthLayout.tsx";
import { BaseInput } from "../../components/input/BaseInput.tsx";
import React from "react";
import img from "../../assets/image/changePassword.png";
import { Button } from "../../components/button/Button.tsx";
import { Text } from "../../components/text/Text.tsx";

export const ChangePassword: React.FC = () => {
  document.title = "Change Your Password | MAXFINDA";
  const LoginImage = new Image();
  LoginImage.src = img;
  return (
    <AuthLayout icon={LoginImage}>
      <>
        <Text text="Change Password" style="text-3xl text-sidebar-active" />
        <BaseInput
          type="text"
          placeholder={"* * * * *"}
          label={"Change Password"}
        />
        <BaseInput
          type="text"
          placeholder={"* * * * *"}
          label={"Confirm Password"}
        />
        <Button text="Confirm" />
      </>
    </AuthLayout>
  );
};
