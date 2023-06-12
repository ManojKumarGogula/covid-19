import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./App/pages/homePage/home";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
];
const router = createBrowserRouter(routes);

export default router;
