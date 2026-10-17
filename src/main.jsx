import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home/Home";
import TOUR from "./Page/Tour/Tour";
import Inspaire from "./Page/Inspaire/Inspaire";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "tour",
          element: <TOUR />,
        },
        {
          path: "inspire",
          element: <Inspaire />,
        },
      ],
    },
  ],
  { basename }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
