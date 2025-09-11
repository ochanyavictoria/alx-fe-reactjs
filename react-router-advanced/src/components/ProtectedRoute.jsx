import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Simulate authentication (replace with real auth later)
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
