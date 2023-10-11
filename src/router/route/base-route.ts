import { ActionTypeUtil } from "../../util/ActionTypeUtil";
import Dashboard from "../../view/dashboard/Dashdoard";
import Admin from "../../view/admin/Admin";
import Settings from "../../view/settings/Settings";
import Posts from "../../view/posts/Posts";
import Errorpage from "../../view/error/Errorpage";
import { BaseRoute } from "../../types/routes.type";

export const baseRoute: BaseRoute[] = [
  {
    name: ActionTypeUtil.routes.DASHBOARD.DASHBOARD,
    component: Dashboard,
    path: "/dashboard",
    meta: {},
    options: {},
    isAuthenticated: true,
    hasSidebar: true,
  },
  {
    name: ActionTypeUtil.routes.ADMIN.ADMIN,
    component: Admin,
    path: "/admin",
    meta: {},
    options: {},
    isAuthenticated: true,
    hasSidebar: true,
  },
  {
    name: ActionTypeUtil.routes.SETTINGS.SETTING,
    component: Settings,
    path: "/settings",
    meta: {},
    options: {},
    isAuthenticated: true,
    hasSidebar: true,
  },
  {
    name: ActionTypeUtil.routes.POSTS.POSTS,
    component: Posts,
    path: "/posts",
    meta: {},
    options: {},
    isAuthenticated: true,
    hasSidebar: true,
  },
  {
    name: ActionTypeUtil.routes.ERROR.ERROR,
    component: Errorpage,
    path: "*",
    meta: {},
    options: {},
    isAuthenticated: false,
    hasSidebar: false,
  },
];
