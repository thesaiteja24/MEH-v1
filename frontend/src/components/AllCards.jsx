import React from "react";
import EngineCategories from "./Engines/EngineCategories";
import Accessories from "./Accessories/Accessories";

const AllCards = () => {
  return (
    <>
      <h1 className="text-3xl font-bold m-6">Engine Categories</h1>
      <EngineCategories />

      <h1 className="text-3xl font-bold m-6">Accessories</h1>
      <Accessories />
    </>
  );
};

export default AllCards;
