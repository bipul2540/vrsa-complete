import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import routerConfig from "./config/RoutesConfig";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";

axios.defaults.baseURL = "http:/localhost:3001/api";

const router = routerConfig;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
