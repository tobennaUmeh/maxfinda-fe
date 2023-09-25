import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoute } from "./route/auth-route.ts";
import { BaseRoute } from "./route/base-route.ts";
import React from "react";

export const Router: React.FC = () => {
  const baseRoute: BaseRoute[] = [];
  const routes = [...baseRoute, ...authRoute];

  console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item, index) => {
          const Element = item.component;
          return <Route key={index} path={item.path} element={<Element />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
