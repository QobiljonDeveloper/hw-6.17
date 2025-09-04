import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-2xl font-bold mb-6">Products</h1>

          <div className="grid grid-cols-3 gap-10">
            {data?.products.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="flex flex-col justify-between p-5 bg-white shadow-md rounded-2xl "
              >
                <div className="flex justify-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-40 h-40 object-contain rounded-lg"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-xl font-bold text-[#0EA5E9]">
                    {item.price}$
                  </p>
                  <p className="text-yellow-500">⭐ {item.rating}</p>
                  <p
                    className={`font-medium ${
                      item.availabilityStatus === "In Stock"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.availabilityStatus}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
