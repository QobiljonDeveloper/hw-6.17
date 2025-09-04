import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="grid grid-cols-4 gap-6">
        {data?.users.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center "
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-500 mt-1">Age: {user.age}</p>
            <p className="text-gray-500">Gender: {user.gender}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
