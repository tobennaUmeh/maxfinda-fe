import {AuthLayout} from "../layout/AuthLayout.tsx";
import {BaseInput} from "../../component/input/BaseInput.tsx";

export const LoginView = () => {
    document.title = "Login | Dwelar"
  return(
    <AuthLayout>
        <>
            <BaseInput placeholder={"Input your email address"} label={"Email"} />
            <BaseInput placeholder={"Input your password"} label={"Password"} />
        </>
    </AuthLayout>
  )
}