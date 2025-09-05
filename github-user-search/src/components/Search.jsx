import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await advancedUserSearch({ username, location, minRepos });
      setResults(users);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-center"
      >
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-medium mb-1">Min Repositories</label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {results.length > 0 && (
          <div className="grid gap-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 border rounded-lg shadow-sm"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
