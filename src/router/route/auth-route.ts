import {ActionTypeUtil} from "../../util/ActionTypeUtil.ts";
import {LoginView} from "../../view/auth/LoginView.tsx";

export const authRoute = [
    {
        name: ActionTypeUtil.routes.auth.login,
        component: LoginView,
        path: "/",
        meta: {},
        options: {},
    }
]