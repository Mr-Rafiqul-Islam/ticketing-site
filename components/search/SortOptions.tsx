import React from "react";

interface SortOptionsProps {
  sortBy: "lowest" | "highest";
  onChange: (value: "lowest" | "highest") => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortBy, onChange }) => {
  return (
    <div className="mb-2">
      <label className="mr-2 text-xs">Sort By:</label>
      <select
        className="border rounded-md p-2 text-xs w-[120px] md:w-[180px]"
        value={sortBy}
        onChange={(e) => onChange(e.target.value as "lowest" | "highest")}
      >
        <option value="lowest">Lowest To Highest Price</option>
        <option value="highest">Highest To Lowest Price</option>
      </select>
    </div>
  );
};

export default SortOptions;
