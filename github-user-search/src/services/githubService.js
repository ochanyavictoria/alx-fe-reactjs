import axios from "axios";

export const advancedUserSearch = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data.items; // list of users
};
