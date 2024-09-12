import { useData } from "../context/UserContext";

const SearchBar = () => {
  const { username, setUsername, fetchGitHubData, darkMode } = useData();
  const handleSearch = (e) => {
    e.preventDefault();
    if (username) fetchGitHubData(username);
  };
  return (
    <div
      className={`container mx-auto p-4 mb-6 ${
        darkMode ? "text-white bg-gray-800" : "bg-white text-gray-950"
      } rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center`}
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub user..."
        className={`w-full md:w-2/3 p-2 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-2 md:mb-0 ${
          darkMode ? "text-white bg-gray-900" : ""
        }`}
      />
      <button
        onClick={handleSearch}
        className="w-full md:w-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
