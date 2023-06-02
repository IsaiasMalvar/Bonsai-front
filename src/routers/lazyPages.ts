import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazyMicrosPage = lazy(
  () => import("../pages/MicrosPage/MicrosPage")
);
