import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);
export const LazyMicrosPage = lazy(
  () => import("../pages/MicrosPage/MicrosPage.js")
);
