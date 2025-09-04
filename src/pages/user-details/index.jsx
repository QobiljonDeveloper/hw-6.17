import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto text-center">
        <img
          src={data.image}
          alt={data.firstName}
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-200 mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">
          {data.firstName} {data.lastName}
        </h2>
        <p className="text-gray-500">Age: {data.age}</p>
        <p className="text-gray-500">Gender: {data.gender}</p>
        <p className="text-gray-500">Email: {data.email}</p>
        <p className="text-gray-500">Phone: {data.phone}</p>
        <p className="text-gray-500 mt-2 font-medium">
          Role:{" "}
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
            {data.role}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
