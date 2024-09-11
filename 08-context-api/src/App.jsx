import GitHubProfile from "./components/GithubUserProfile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-purple-50 min-h-screen p-6">
        <GitHubProfile />
      </div>
    </UserContextProvider>
  );
}

export default App;
