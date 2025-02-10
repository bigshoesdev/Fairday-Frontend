import JobDistance from "./jobDistance";
import JobSearchCategory from "./jobSearchCategory";
import JobSearchMode from "./jobSearchMode";
import { Filters } from ".";

const JobSearchOptions = ({
  filters,
  onSearchChange,
  searchCategory,
  categoryCountList
}: {
  filters: Filters;
  onSearchChange: (newFilters: Partial<typeof filters>) => void;
  searchCategory: any;
  categoryCountList: any
}) => {

  return (
    <div className="w-full">
      <JobSearchMode
        filters={filters}
        onSearchChange={onSearchChange} />
      <JobDistance
        filters={filters}
        onSearchChange={onSearchChange} />

      {searchCategory.map((item, index) =>
        <div
          key={index}
          className="w-full"
        >
          <JobSearchCategory
            jobSearchTitle={item.title}
            jobSearchType={item.type}
            searchList={item.value}
            categoryCountList={categoryCountList}
          />
        </div>
      )}
    </div>
  );
};

export default JobSearchOptions;


