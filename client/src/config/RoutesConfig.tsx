import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Contactus } from "../pages/contact/Contactus";
import CreateAccount from "../pages/createAccount/CreateAccount";
import Login from "../pages/login/Login";
import StudentPage from "../pages/students/StudentPage";
import { getUser } from "../util/useToken";
import { HodAuth, StudentAuth, TeacherAuth } from "../util/protectedRoute";
import HodPage from "../pages/hod/HodPage";
import Marks from "../pages/students/Marks";
import TeacherPage from "../pages/teacher/TeacherPage";
import { AuthProvider } from "../util/authProvider";

const user = getUser();
console.log(user);

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
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

  {
    path: "/student",
    element: (
      <StudentAuth>
        <StudentPage />
      </StudentAuth>
    ),

    children: [
      {
        path: "/student/marks",
        element: <Marks />,
      },
    ],
  },

  {
    path: "/hod",
    element: (
      <HodAuth>
        <HodPage />
      </HodAuth>
    ),
  },

  {
    path: "/teacher",
    element: (
      <TeacherAuth>
        <TeacherPage />
      </TeacherAuth>
    ),
  },
]);

export default routerConfig;
