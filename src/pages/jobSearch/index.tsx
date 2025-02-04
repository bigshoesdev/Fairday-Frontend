import JobSearchBar from "src/pages/home/JobSearchBar";
import JobSearchBoard from "src/pages/jobSearch/JobSearchBoard";
import MapContent from "src/pages/jobSearch/MapContent";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { getAllJobs } from "src/store/user/jobSlice";
import { getJobConstManage } from "src/store/user/jobSlice";
import { useLocation } from "react-router-dom";
import { parseQueryParams } from "src/utlies/commonfunctions";

export interface Filters {
  language: string;
  jobTitle: string;
  category: string;
  location: string;
  radius: number;
  sortBy: string;
  distance: number;
  salary: number;
  employmentType: string;
  locationSelect: string;
  page: number;
}

const JobSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { jobConfig } = useSelector((state: any) => state);
  const location = useLocation();
  const [filters, setFilters] = useState<Filters>({
    language: "",
    jobTitle: "",
    category: "",
    location: "",
    radius: 0,
    sortBy: "Relevance",
    distance: 0,
    salary: 0,
    employmentType: "",
    locationSelect: "",
    page: 1,
  });

  const jobDetailsInfos = jobConfig.jobDetails;
  const GroupData = jobConfig.jobConstManage;

  useEffect(() => {
    dispatch(getJobConstManage());
    dispatch(getAllJobs());
    const newFilters = parseQueryParams(location.search);
    setFilters(newFilters);
  }, [dispatch, location.search]);

  const handleSearchChange = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return (
    <div className="w-full items-center flex-col flex justify-center bg-[#f7fbff]">
      <div className="w-full flex">
        <MapContent />
      </div>
      <JobSearchBar filters={filters} onSearchChange={handleSearchChange} />
      <div className="w-[80%]">
        <JobSearchBoard
          filters={filters}
          onSearchChange={handleSearchChange}
          jobDetailsInfos={jobDetailsInfos}
          GroupData={GroupData}
        />
      </div>
    </div>
  );
};

export default JobSearch;
