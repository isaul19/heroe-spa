import { Navigate } from "react-router-dom";
import { isAuth } from "../app/heroes/helpers";

export const PublicRoute = ({ children }) => {
  if (isAuth()) {
    return <Navigate to="/" />;
  }

  return children;
};
