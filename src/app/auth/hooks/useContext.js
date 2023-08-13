import { useContext } from "react";
import { AuthContext } from "../context";

export const useAppContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return "Context not found";
  }

  return context;
};
