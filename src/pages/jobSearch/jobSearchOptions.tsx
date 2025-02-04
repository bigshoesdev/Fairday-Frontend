import JobDistance from "./jobDistance";
import JobSearchCategory from "./jobSearchCategory";
import JobSearchMode from "./jobSearchMode";
import {
  jobsearchitem_salary,
  jobsearchitem_employment,
  jobsearchitem_location,
} from "../../mock/jobSearchCategory.json";
import { Filters } from ".";

const JobSearchOptions = ({
  filters,
  onSearchChange,
}: {
  filters: Filters;
  onSearchChange: (newFilters: Partial<typeof filters>) => void;
}) => {
  return (
    <div className="w-full">
      <JobSearchMode 
          filters={filters}
          onSearchChange={onSearchChange}/>
      <JobDistance 
          filters={filters}
          onSearchChange={onSearchChange}/>
      <JobSearchCategory
        type={"salary"}
        filters={filters}
        onSearchChange={onSearchChange}
        jobSearchType={jobsearchitem_salary.jobsearchtitle}
        jobSearchList={jobsearchitem_salary.jobsearchitems}
      />
      <JobSearchCategory
        type={"employmentType"}
        filters={filters}
        onSearchChange={onSearchChange}
        jobSearchType={jobsearchitem_employment.jobsearchtitle}
        jobSearchList={jobsearchitem_employment.jobsearchitems}
      />
      <JobSearchCategory
        type={"locationSelect"}
        filters={filters}
        onSearchChange={onSearchChange}
        jobSearchType={jobsearchitem_location.jobsearchtitle}
        jobSearchList={jobsearchitem_location.jobsearchitems}
      />
    </div>
  );
};

export default JobSearchOptions;
