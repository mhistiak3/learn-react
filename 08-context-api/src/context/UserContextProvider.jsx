import { useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("mhistiak3"); 
  const [loading, setLoading] = useState(false);

  const fetchGitHubData = async (username) => {
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
     setUser(null)
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchGitHubData(username);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        username,
        setUsername,
        repos,
        loading,
        fetchGitHubData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
