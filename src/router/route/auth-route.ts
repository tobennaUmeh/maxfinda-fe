import { ActionTypeUtil } from "../../util/ActionTypeUtil.ts";
import { LoginView } from "../../view/auth/LoginView.tsx";

interface authRouteType {
  name: string;
  component: () => JSX.Element;
  path: string;
  meta: object;
  options: object;
}

export const authRoute: authRouteType[] = [
  {
    name: ActionTypeUtil.routes.AUTH.LOGIN,
    component: LoginView,
    path: "/",
    meta: {},
    options: {},
  },
];
