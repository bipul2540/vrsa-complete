import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Button from "../components/Button/Button";
import { Contactus } from "../pages/contact/Contactus";
import CreateAccount from "../pages/createAccount/CreateAccount";
import Login from "../pages/login/Login";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create-account",
        element: <CreateAccount />,
      },

      {
        path: "/signin",
        element: <Login />,
      },
    ],
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
]);

export default routerConfig;
