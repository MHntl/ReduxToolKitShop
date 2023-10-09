import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end text-black">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-300 py-3 px-5"
        name=""
        id=""
        defaultValue=""
      >
        <option disabled value="">
          Sort by
        </option>
        <option value="inc">Low to High</option>
        <option value="dec">High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
