import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!data) return null;

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-center">
          <img
            src={data.images}
            alt={data.title}
            className="rounded-xl w-[80%] object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
          <p className="text-gray-600">{data.description}</p>

          <p className="text-xl font-semibold text-[#0EA5E9]">{data.price}$</p>
          <p className="text-yellow-500">⭐ {data.rating}</p>
          <p
            className={`font-medium ${
              data.availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {data.availabilityStatus}
          </p>

          <p>
            <span className="font-semibold">Brand:</span> {data.brand}
          </p>
          <p>
            <span className="font-semibold">Warranty:</span>{" "}
            {data.warrantyInformation}
          </p>
          <p>
            <span className="font-semibold">Shipping:</span>{" "}
            {data.shippingInformation}
          </p>
          <p>
            <span className="font-semibold">Return Policy:</span>{" "}
            {data.returnPolicy}
          </p>

  
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-4">
          {data.reviews?.map((review, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg shadow-sm bg-[#233450]"
            >
              <p className="text-yellow-500">⭐ {review.rating}</p>
              <p className="text-white">"{review.comment}"</p>
              <p className="text-sm text-slate-200">{review.reviewerName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
