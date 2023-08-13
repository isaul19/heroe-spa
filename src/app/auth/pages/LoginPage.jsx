import { Navigate, useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useContext";
import { useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const [input, setInput] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    await login(input);

    const redirectPath = JSON.parse(localStorage.getItem("last_path")) || "/";

    navigate(redirectPath, {
      replace: true,
    });
  };

  return (
    <form className="container mt-5" onSubmit={onLogin}>
      <h1>Login</h1>
      <hr />
      <input
        className="form-control mb-2"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Your name"
      />
      <button className="btn btn-primary">Login</button>
    </form>
  );
};
