
import { useData } from "../context/UserContext";
import SearchBar from "./SearchBar";
import GithubRepo from "./GithubRepo";
import GithubInfo from "./GithubInfo";
import ModeSwitch from "./ModeSwitch";


const GitHubProfile = () => {
const { user, loading, darkMode } = useData();
  return (
    <div
      className={`min-h-screen p-4 md:p-6 ${
        darkMode ? " bg-gray-900 text-white" : "bg-purple-50 text-gray-900"
      }`}
    >
      <ModeSwitch />
      <div className="w-4/5 mx-auto">
        {/* Search Bar */}
        <SearchBar />

        {loading && <p className="text-center text-purple-600 ">Loading...</p>}

        {user ? (
          <div
            className={`container mx-auto p-6 rounded-lg shadow-lg ${
              darkMode ? "text-white bg-gray-800" : "bg-white"
            }`}
          >
            {/* User Info */}
            <GithubInfo />

            {/* Repositories Section */}
            <GithubRepo />
          </div>
        ) : (
          <h2>No User Found!</h2>
        )}
      </div>
    </div>
  );
};

export default GitHubProfile;
