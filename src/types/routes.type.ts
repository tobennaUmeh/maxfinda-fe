import React from "react";
import { PathRouteProps } from "react-router-dom";

export interface RouteInterface extends PathRouteProps {
  component: React.LazyExoticComponent<React.FC>;
  subRoutes?: RouteInterface[];
  hasSidebar?: boolean;
  authenticated?: boolean;
  user_role?: string[];
  dismissible?: boolean;
  opaque?: boolean;
}
export interface authRouteType {
  name: string;
  component: React.FC;
  path: "/" | "login" | "forgot-password" | "otp" | "change-password";
  meta: object;
  options: object;
  hasSidebar?: boolean;
  isAuthenticated: boolean;
}
export type BaseRoute = {
  name?: string;
  component: React.ComponentType | React.FC;
  path: string;
  meta: object;
  options: object;
  hasSidebar?: boolean;
  isAuthenticated: boolean;
  subRoutes?: Omit<BaseRoute, "subRoutes">;
};
