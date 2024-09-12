import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import GitHubProfile from "./components/GithubUserProfile";
import { UserContextProvider } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("mhistiak3");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchGitHubData = useCallback(
    async (username) => {
      try {
        setLoading(true);
        const userData = await axios.get(
          `https://api.github.com/users/${username}`
        );
        const repoData = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        setUser(userData.data);
        setRepos(repoData.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    fetchGitHubData(username);
  }, []);

  return (
    <UserContextProvider  value={{
        user,
        username,
        setUsername,
        repos,
        loading,
        fetchGitHubData,
        darkMode,
        toggleDarkMode,
      }}>
      <GitHubProfile />
    </UserContextProvider>
  );
}

export default App;
