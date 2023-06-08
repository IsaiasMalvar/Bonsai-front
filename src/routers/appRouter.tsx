import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import { LazyLoginPage, LazyMicrosPage } from "./lazyPages";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CreateMicroPage from "../pages/CreateMicroPage/CreateMicroPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense>
            <LazyMicrosPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: <CreateMicroPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
