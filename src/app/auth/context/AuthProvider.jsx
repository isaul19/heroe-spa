import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? "";

  return {
    user: user,
    logged: !!user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {}, init);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: name,
    };

    dispatch(action);
  };

  const logout = ({ lastPath }) => {
    localStorage.removeItem("user");
    localStorage.setItem("last_path", JSON.stringify(lastPath));

    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  useEffect(() => {
    console.log("STATE:", state);

    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    }
  }, [state.user]);

  return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
};
