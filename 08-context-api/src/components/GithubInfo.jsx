import { useContext } from "react";
import UserContext from "../context/UserContext";
const GithubInfo = () => {
    const { user } = useContext(UserContext);
  return (
    <div>
      <header className="flex flex-col md:flex-row items-center mb-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="rounded-full w-24 h-24 border-4 border-purple-500 mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
            {user.name || user.login}
          </h1>
          <p className="text-purple-500">@{user.login}</p>
          <p className="mt-2 text-gray-600">{user.bio}</p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-4 space-y-2 md:space-y-0 md:space-x-4">
            {user.company && (
              <p className="text-sm text-purple-500">🏢 {user.company}</p>
            )}
            {user.location && (
              <p className="text-sm text-purple-500">📍 {user.location}</p>
            )}
            {user.blog && (
              <a
                href={user.blog}
                className="text-sm text-purple-500 hover:underline"
              >
                🌐 {user.blog}
              </a>
            )}
          </div>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Follow
          </button>
        </div>
      </header>

      {/* Additional Info */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-gray-700">
        <p>📅 Joined: {new Date(user.created_at).toLocaleDateString()}</p>
        {user.email && <p>✉️ Email: {user.email}</p>}
      </div>

      {/* Stats Section */}
      <div className="my-6 flex flex-col sm:flex-row justify-around bg-purple-100 p-4 rounded-lg">
        <div className="text-center mb-4 sm:mb-0">
          <h3 className="text-xl font-semibold text-purple-700">
            Repositories
          </h3>
          <p className="text-2xl font-bold text-purple-900">
            {user.public_repos}
          </p>
        </div>
        <div className="text-center mb-4 sm:mb-0">
          <h3 className="text-xl font-semibold text-purple-700">Followers</h3>
          <p className="text-2xl font-bold text-purple-900">{user.followers}</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-700">Following</h3>
          <p className="text-2xl font-bold text-purple-900">{user.following}</p>
        </div>
      </div>
    </div>
  );
};

export default GithubInfo;
