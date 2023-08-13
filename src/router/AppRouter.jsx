import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../app/auth";
import { HeroesRoutes } from "../app/heroes/routes/HeroesRoutes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRouter } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
