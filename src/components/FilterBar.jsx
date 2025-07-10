import React from "react";

const FilterBar = ({ categories, currentFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            category === currentFilter ? "active" : ""
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
