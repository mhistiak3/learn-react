import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="w-1/3 mx-auto p-10">
      <h2 className="text-2xl font-semibold p-6 bg-purple-800 text-white text-center rounded-sm ">USER: {id}</h2>
    </div>
  );
};

export default User;
