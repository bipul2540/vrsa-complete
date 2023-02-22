import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import routerConfig from "./config/RoutesConfig";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http:/localhost:3001/api";

const router = routerConfig;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
