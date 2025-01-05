import React from "react";

const SortOptions = () => {
  return (
    <div className="mb-4">
      <label className="mr-2">Sort By:</label>
      <select className="border rounded-md p-2">
        <option value="price">Price</option>
        <option value="duration">Duration</option>
        <option value="airline">Airline</option>
      </select>
    </div>
  );
};

export default SortOptions;
