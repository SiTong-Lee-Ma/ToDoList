import React from "react";

const filters = [
  { value: "all", label: "全部" },
  { value: "active", label: "未完成" },
  { value: "completed", label: "已完成" }
];

function Filter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter" role="group" aria-label="任务筛选">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={currentFilter === filter.value ? "active" : ""}
          type="button"
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
