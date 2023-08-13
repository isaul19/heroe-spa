import { AuthProvider } from "./app/auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
