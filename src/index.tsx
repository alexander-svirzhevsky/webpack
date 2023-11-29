import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { Suspense, lazy } from "react";

const About = lazy(() => import("@/pages/about/About"));
const Login = lazy(() => import("@/pages/login/Login"));

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback='Loading...'>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback='Loading...'>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
