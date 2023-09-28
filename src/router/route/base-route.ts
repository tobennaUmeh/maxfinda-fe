import React from "react";
import { ActionTypeUtil } from "../../util/ActionTypeUtil";
import Dashboard from "../../view/dashboard/Dashdoard";
import Admin from "../../view/admin/Admin";
import Settings from "../../view/settings/Settings";
import Posts from "../../view/posts/Posts";
import Error404 from "../../view/error/Error404";

export type BaseRoute = {
  name?: string;
  component: React.ComponentType | React.FC;
  path: string;
  meta: object;
  options: object;
  isAuthenticated: boolean;
};

export const baseRoute: BaseRoute[] = [
  {
    name: ActionTypeUtil.routes.DASHBOARD.DASHBOARD,
    component: Dashboard,
    path: "/dashboard",
    meta: {},
    options: {},
    isAuthenticated: true,
  },
  {
    name: ActionTypeUtil.routes.ADMIN.ADMIN,
    component: Admin,
    path: "/admin",
    meta: {},
    options: {},
    isAuthenticated: true,
  },
  {
    name: ActionTypeUtil.routes.SETTINGS.SETTING,
    component: Settings,
    path: "/settings",
    meta: {},
    options: {},
    isAuthenticated: true,
  },
  {
    name: ActionTypeUtil.routes.POSTS.POSTS,
    component: Posts,
    path: "/posts",
    meta: {},
    options: {},
    isAuthenticated: true,
  },
  {
    name: ActionTypeUtil.routes.ERROR.ERROR,
    component: Error404,
    path: "*",
    meta: {},
    options: {},
    isAuthenticated: false,
  },
];
