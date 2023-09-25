import React from "react";

export type BaseRoute = {
  name?: string;
  component: React.ComponentType;
  path: string;
  meta: object;
  options: object;
  isAuthenticated: boolean;
};
