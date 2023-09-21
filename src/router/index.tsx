import {BrowserRouter, Route, Routes} from "react-router-dom";
import {authRoute} from "./route/auth-route.ts";
import {BaseRoute} from "./route/base-route.ts";

export const Router = () => {
    const baseRoute: BaseRoute[]  | undefined[] = [];
    const routes = baseRoute.concat(authRoute)

    console.log(routes)
  return(
      <BrowserRouter>
          <Routes>
              {
                  routes.map((item, index)=>{
                      const Element = item!.component
                      return  <Route key={index} path={item!.path} element={<Element />}  />
                  })
              }
          </Routes>
      </BrowserRouter>
  )
}