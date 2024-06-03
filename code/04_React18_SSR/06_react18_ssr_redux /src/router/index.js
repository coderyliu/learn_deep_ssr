import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
];

export default routes;
