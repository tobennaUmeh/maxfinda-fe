import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoute } from "./route/auth-route.ts";
import { baseRoute } from "./route/base-route.ts";
import React from "react";
import Sidebar from "../container/Sidebar/index.tsx";

export const Router: React.FC = () => {
  const routes = [...authRoute, ...baseRoute];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          // console.log(route);
          const Element = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <div className="flex">
                  {route.hasSidebar && <Sidebar />}
                  <Element />
                </div>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
