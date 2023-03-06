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
import Home from "../pages/home/Home";
import { AddUser } from "../pages/addUser/AddUser";
import ViewUser from "../pages/viewUser/ViewUser";
import Analyze from "../pages/analyze/Analyze";
import RemoveUser from "../pages/removeUser/RemoveUser";
import StudentForm from "../pages/addUser/components/StudentForm/StudentForm";
import CourseForm from "../pages/addUser/components/CourseForm/CourseForm";
import MarksFrom from "../pages/addUser/components/MarksForm/MarksForm";
import UserDetailPage from "../pages/viewUser/UserDetailPage/UserDetailPage";

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
    children: [
      {
        path: "/teacher/home",
        element: <Home />,
      },
      {
        path: "/teacher/home/add-user",
        element: <AddUser />,

        children: [
          {
            path: "/teacher/home/add-user/student-form",
            element: <StudentForm />,
          },
          {
            path: "/teacher/home/add-user/course-form",
            element: <CourseForm />,
          },
          {
            path: "/teacher/home/add-user/marks-form",
            element: <MarksFrom />,
          },
        ],
      },
      {
        path: "/teacher/home/view-user",
        element: <ViewUser />,
        children: [
          {
            path: "/teacher/home/view-user/:regNo",
            element: <UserDetailPage />,
          },
        ],
      },
      {
        path: "/teacher/home/analyze-marks",
        element: <Analyze />,
      },
      {
        path: "/teacher/home/edit-user",
        element: <RemoveUser />,
      },
    ],
  },
]);

export default routerConfig;
