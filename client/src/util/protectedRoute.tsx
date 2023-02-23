import { getUser } from "./useToken";
import { Navigate } from "react-router-dom";
type props = {
  children: any;
};

export const StudentAuth = ({ children }: props) => {
  const user = getUser();
  console.log(user);

  if (user && user.roles === "student") {
    return children;
  }

  return <Navigate to='/' />;
};

type hodProps = {
  children: any;
};
export const HodAuth = ({ children }: hodProps) => {
  const user = getUser();
  console.log(user);

  if (user && user.roles === "HOD") {
    return children;
  }

  return <Navigate to='/' />;
};

type teacherProps = {
  children: any;
};

export const TeacherAuth = ({ children }: teacherProps) => {
  const user = getUser();
  console.log(user);

  if (user && user.roles === "teacher") {
    return children;
  }

  return <Navigate to='/' />;
};

