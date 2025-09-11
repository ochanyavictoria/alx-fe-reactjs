import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic route for blog posts */}
        <Route path="/posts/:id" element={<BlogPost />} />

        {/* Protected route wrapper */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
