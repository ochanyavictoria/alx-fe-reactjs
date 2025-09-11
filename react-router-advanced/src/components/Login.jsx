import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
}
