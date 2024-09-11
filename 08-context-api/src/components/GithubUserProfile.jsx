import { useContext } from "react";
import UserContext from "../context/UserContext";
import SearchBar from "./SearchBar";
import GithubRepo from "./GithubRepo";
import GithubInfo from "./GithubInfo";


const GitHubProfile = () => {
const {
  user,
  loading,
} = useContext(UserContext);
  return (
    <div className="w-4/5 mx-auto">
      {/* Search Bar */}
      <SearchBar />

      {loading && <p className="text-center text-purple-600">Loading...</p>}

      {user ? (
        <div className="container mx-auto p-6 rounded-lg shadow-lg bg-white">
          {/* User Info */}
          <GithubInfo/>

          {/* Repositories Section */}
          <GithubRepo/>
        </div>
      ) : (
        <h2>No User Found!</h2>
      )}
    </div>
  );
};

export default GitHubProfile;
