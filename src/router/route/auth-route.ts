import { authRouteType } from "../../types/routes.type.ts";
import { ActionTypeUtil } from "../../util/ActionTypeUtil.ts";
import { ChangePassword } from "../../view/auth/ChangePassword.tsx";
import { ForgotPassword } from "../../view/auth/ForgotPassword.tsx";
import { LoginView } from "../../view/auth/LoginView.tsx";
import { OTP } from "../../view/auth/OTP.tsx";

export const authRoute: authRouteType[] = [
  {
    name: ActionTypeUtil.routes.AUTH.LOGIN,
    component: LoginView,
    path: "/",
    meta: {},
    options: {},
    isAuthenticated: false,
    hasSidebar: false,
  },
  {
    name: ActionTypeUtil.routes.AUTH.LOGIN,
    component: LoginView,
    path: "login",
    meta: {},
    options: {},
    isAuthenticated: false,
    hasSidebar: false,
  },
  {
    name: ActionTypeUtil.routes.AUTH.FORGOTPASSWORD,
    component: ForgotPassword,
    path: "forgot-password",
    meta: {},
    options: {},
    isAuthenticated: false,
    hasSidebar: false,
  },
  {
    name: ActionTypeUtil.routes.AUTH.CHANGEPASSWORD,
    component: ChangePassword,
    path: "change-password",
    meta: {},
    options: {},
    isAuthenticated: false,
    hasSidebar: false,
  },
  {
    name: ActionTypeUtil.routes.AUTH.OTP,
    component: OTP,
    path: "otp",
    meta: {},
    options: {},
    isAuthenticated: false,
    hasSidebar: false,
  },
];
