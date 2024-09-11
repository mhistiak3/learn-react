import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch("https://api.github.com/users/mhistiak3")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(data);

  return (
    <div className="w-1/3 mx-auto p-10">
      <img src={data.avatar_url} alt={data.name} />
      <h1 className="text-2xl font-semibold p-6 bg-purple-800 text-white text-center rounded-sm ">
        {data.name}
      </h1>
      <p className="text-md border border-t-2 p-6 bg-purple-800 text-white text-center rounded-sm ">
        {data.bio}
      </p>
      <div className="text-md border border-t-2 p-6 bg-purple-800 text-white text-center rounded-sm flex flex-col gap-2">
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
      </div>
    </div>
  );
};

export default Github;

export async function githubUserInfo() {
  const data = await fetch("https://api.github.com/users/mhistiak3");
  return data;
}
