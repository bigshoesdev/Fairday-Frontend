import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const JobSearchCategory = ({
  type,
  filters,
  onSearchChange,
  jobSearchType,
  jobSearchList,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | number | null>(null);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const displayedItems = isExpanded ? jobSearchList : jobSearchList.slice(0, 5);
  const handleItemClick = (value: string | number) => {
    setSelectedItem(value);
    onSearchChange({ [type]: value }); // Dynamically update the filter based on the type
  };

  return (
    <div className="mb-6">
      <p className="text-[16px] font-semibold text-black">{jobSearchType}:</p>
      <ul className="mt-2 space-y-1">
        {displayedItems.map((jobitem, index) => {
          const isSelected = jobitem.item === selectedItem;
          return (
            <li
              key={index}
              className={`text-[15px] flex justify-between cursor-pointer ${
                isSelected ? "text-blue-600 font-semibold" : "text-black"
              }`}
              onClick={() => handleItemClick(jobitem.item)}
            >
              <span>{jobitem.item}</span>
              <span className="text-gray-500 text-sm">({jobitem.count})</span>
            </li>
          );
        })}
      </ul>
      {jobSearchList.length > 5 && (
        <div
          className="text-black font-semibold cursor-pointer mt-2"
          onClick={toggleExpansion}
        >
          {isExpanded ? (
            <span>
              <RemoveCircleIcon className="text-blue-500" /> less &lt;
            </span>
          ) : (
            <span>
              <AddCircleIcon className="text-blue-500" /> more &gt;
            </span>
          )}
        </div>
      )}
    </div>
  );
};
export default JobSearchCategory;
