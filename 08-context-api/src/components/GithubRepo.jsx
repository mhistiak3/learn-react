import { useData } from "../context/UserContext";

const GithubRepo = () => {
  const { repos } =useData()
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        Repositories
      </h2>
      <ul>
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="my-3 p-4 border border-purple-300 rounded-lg hover:shadow-md"
          >
            <a
              href={repo.html_url}
              className="text-purple-700 font-bold text-lg hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-600 mt-1">{repo.description}</p>
            <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center">
              <span className="text-sm text-purple-500">{repo.language}</span>
              <span className="ml-0 sm:ml-4 text-sm text-gray-500">
                ⭐ {repo.stargazers_count}
              </span>
              <span className="ml-0 sm:ml-4 text-sm text-gray-500">
                🍴 {repo.forks_count}
              </span>
              <span className="mt-2 sm:mt-0 ml-auto text-sm text-gray-400">
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GithubRepo;
