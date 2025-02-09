import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAccessories } from '../../contexts/AccessoriesContext'; 

const AccessCard = ({ accessory }) => {
  const navigate = useNavigate();
  // const { selectAccessory } = useAccessories();


  const handleClick = () => {
    // Navigate to the details page and pass the accessory data
    navigate('/details', { state: { accessory } });
  };
  return (
    <div 
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm transition-transform transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img 
        className="rounded-t-lg w-full h-48 object-cover" 
        src={accessory.image_url} 
        alt={accessory.title} 
      />
      <div className="p-5">
        <h6 className="mb-2 text-xl font-semibold">
          {accessory.title.replace("-", " ")}
        </h6>
        <p className="mb-3 text-lg">
          Available: {accessory.available}
        </p>
      </div>
    </div>
  );
};

export default AccessCard;