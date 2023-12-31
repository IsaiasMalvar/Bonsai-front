import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);
export const LazyMicrosPage = lazy(
  () => import("../pages/MicrosPage/MicrosPage.js")
);

export const LazyCreateMicroPage = lazy(
  () => import("../pages/CreateMicroPage/CreateMicroPage.js")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage.js")
);

export const LazyDetailPage = lazy(
  () => import("../pages/DetailPage/DetailPage.js")
);
