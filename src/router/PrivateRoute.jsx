import { Navigate } from "react-router-dom";
import { isAuth } from "../app/heroes/helpers";

export const PrivateRouter = ({ children }) => {
  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  return children;
};
