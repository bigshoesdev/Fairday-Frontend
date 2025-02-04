import { Filters } from ".";

const JobSearchMode = ({
  filters,
  onSearchChange,
}: {
  filters: Filters;
  onSearchChange: (newFilters: Partial<typeof filters>) => void;
}) => {
  const handleSortChange = (sortBy: string) => {
    onSearchChange({ sortBy });
  };

  return (
    <div className="mb-3 flex">
      <span className="font-semibold text-gray-400">Sort by:</span>
      <span className="text-black font-semibold text-right ml-auto">
        <span
          className={`cursor-pointer ${
            filters.sortBy === "Relevance" ? "text-blue-600" : ""
          }`}
          onClick={() => handleSortChange("Relevance")}
        >
          Relevance
        </span>
        {" - "}
        <span
          className={`cursor-pointer ${
            filters.sortBy === "Date" ? "text-blue-600" : ""
          }`}
          onClick={() => handleSortChange("Date")}
        >
          Date
        </span>
      </span>
    </div>
  );
};

export default JobSearchMode;
