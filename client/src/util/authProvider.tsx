import { Navigate } from "react-router-dom";
import { getUser } from "./useToken";

type props = {
  children: any;
};

export const AuthProvider = ({ children }: props) => {
  const user = getUser();

  if (!user) {
    return children;
  }

  return <Navigate to={`/${user.roles}`} />;
};
