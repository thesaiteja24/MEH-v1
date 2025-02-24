import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryAccessCard = ({ accessory }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the details page and pass the accessory data
    navigate(`/history/accessories/${accessory._id}`, { state: { accessory } });
  };

  return (
    <div
      className="relative w-full max-w-sm dark:bg-gray-900 border border-gray-200 rounded-lg shadow-sm transition-transform transform sm:w-auto cursor-pointer"
      onClick={handleClick}
    >
      <p className="absolute top-2 right-4 text-[13px] text-gray-400 sm:text-base md:text-lg lg:text-xl">
        {accessory.createdAt
          ? new Date(accessory.createdAt).toLocaleDateString()
          : "DD/MM/YYYY"}
      </p>
      <div className="p-2 mt-4 text-white">
        <p className="mb-2 text-lg">
          <strong>Name:</strong> {accessory.customer_name}
        </p>
        <p className="mb-2 text-lg">
          <strong>Phone:</strong> {accessory.title}
        </p>
        <p className="mb-2 text-lg">
          <strong>Price:</strong> ${accessory.price}
        </p>
      </div>
      <button
        type="button"
        className="cursor-pointer ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[12px] px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        View More
      </button>
    </div>
  );
};

export default HistoryAccessCard;
