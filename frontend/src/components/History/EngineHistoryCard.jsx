import React from "react";
import { useNavigate } from "react-router-dom";

export const EngineHistoryCard = ({ engine }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/history/engine/${engine._id}`);
  };

  return (
    <div className="border border-white rounded-lg">
      <p className="absolute top-2 right-4 text-[13px] text-gray-400 sm:text-base md:text-lg lg:text-xl">
        {engine.createdAt
          ? new Date(engine.createdAt).toLocaleDateString()
          : "DD/MM/YYYY"}
      </p>
      <div className="p-2 mt-5 text-white">
        <p className="mb-2 text-lg">
          <strong>Title:</strong> {engine.title}
        </p>
        <p className="mb-2 text-lg">
          <strong>Customer:</strong> {engine.customer_name}
        </p>
        <p className="mb-2 text-lg">
          <strong>Price:</strong> ₹{engine.price}
        </p>
        <div className="flex justify-center p-1">
          {engine.exchange ? (
            <img
              src={engine.image_url}
              alt={engine.title}
              className="rounded-lg w-full h-60 object-cover"
            />
          ) : (
            <img
              src={engine.image_url_main}
              alt={engine.title}
              className="rounded-lg w-full h-60 object-cover"
            />
          )}
        </div>
        <div className="flex">
          <button
            type="button"
            className="w-full my-4 p-3 rounded-lg bg-blue-600 hover:bg-blue-500 flex cursor-pointer"
            onClick={() => {
              handleClick();
            }}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
