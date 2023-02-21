import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import routerConfig from "./config/RoutesConfig";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";

const router = routerConfig;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
