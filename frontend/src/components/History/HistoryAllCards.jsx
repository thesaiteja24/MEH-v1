import React from "react";
import HistoryEngines from "./HistoryEngines/HistoryEngines";
import HistoryAccessories from "./HistoryAccessories/HistoryAccessories";
import { Navigate, NavLink } from "react-router-dom";
import { useHistoryAccessories } from "../../contexts/HistoryAccessoriesContext";




const HistoryAllCards = () => {
//   const context = useHistoryAccessories();

// if (!context) {
//   console.error("Error: HistoryAccessoriesContext is missing. Make sure it's wrapped in HistoryAccessoriesProvider.");
//   return null; // Prevent rendering if context is missing
// }

// const { HistoryAccessories } = context;



  
  // let totalValue = () => {
  //   if (!HistoryAccessories || HistoryAccessories.length === 0) return 0;
  
  //   return HistoryAccessories.reduce((total, item) => {
  //     return total + (item.price || 0); // Ensure `price` is valid
  //   }, 0);
  // };
  let total = 1000000;
  
  return (
    <>
    <div className="flex flex-row justify-between items-center m-4">
      <h4 className="mt-1 text-2xl font-bold  text-white">Total: {total.toLocaleString('en-IN')} </h4>
      <NavLink
        className="cursor-pointer text-3xl text-white fa-solid fa-calendar"
        to="/history/datefilter"
        />
      </div>
      <div className="flex flex-row justify-between items-center m-5">
      <h1 className="text-3xl font-bold  text-white">Engines </h1>  
      <h4 className="text-[14px] font-bold  text-white">Total: {total.toLocaleString('en-IN')} </h4>
      </div>
      
     
        <HistoryEngines/>
        
        <div className="flex flex-row justify-between items-center m-4">
      <h1 className="text-3xl font-bold  text-white">Accessories </h1>  
      <h4 className="text-[14px] font-bold  text-white">Total: {total.toLocaleString('en-IN')} </h4>
      </div>
      <HistoryAccessories/>


    </>
  );
};

export default HistoryAllCards;