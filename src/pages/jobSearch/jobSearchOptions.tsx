import JobDistance from "./jobDistance";
import JobSearchCategory from "./jobSearchCategory";
import JobSearchMode from "./jobSearchMode";
import {jobsearchitem_salary,jobsearchitem_employment,jobsearchitem_location} from "../../mock/jobSearchCategory.json"

const JobSearchOptions = () => {
  return (
    <div className="w-full">
      <JobSearchMode />
      <JobDistance />
      <JobSearchCategory jobSearchType={jobsearchitem_salary.jobsearchtitle} jobSearchList={jobsearchitem_salary.jobsearchitems}/>
      <JobSearchCategory jobSearchType={jobsearchitem_employment.jobsearchtitle} jobSearchList={jobsearchitem_employment.jobsearchitems}/>
      <JobSearchCategory jobSearchType={jobsearchitem_location.jobsearchtitle} jobSearchList={jobsearchitem_location.jobsearchitems}/>
    </div>
  );
};

export default JobSearchOptions;
