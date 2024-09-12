import { useData } from "../context/UserContext";

const ModeSwitch = () => {
  const { darkMode, toggleDarkMode } =useData()
  return (
    <div className="container mx-auto p-4 mb-6 flex justify-end">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ModeSwitch;
