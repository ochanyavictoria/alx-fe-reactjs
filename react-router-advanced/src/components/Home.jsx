import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/posts/1">Go to Post 1</Link> |{" "}
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}
