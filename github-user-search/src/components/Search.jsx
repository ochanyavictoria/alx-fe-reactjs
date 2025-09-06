import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username); // ✅ calling fetchUserData
      setResults(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {results && (
        <div className="border p-4 rounded shadow">
          <img src={results.avatar_url} alt={results.login} className="w-20 h-20 rounded-full" />
          <h2 className="text-lg font-bold">{results.name || results.login}</h2>
          <a href={results.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
