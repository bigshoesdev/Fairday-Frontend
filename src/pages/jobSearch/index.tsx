import JobSearchBoard from "src/pages/jobSearch/JobSearchBoard";
import MapContent from "src/pages/jobSearch/MapContent";
import SearchBar from 'src/pages/home/SearchBar';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { getJobConstManage, getCategoryCount, getJobsByQuery } from "src/store/user/jobSlice";
import { useLocation } from "react-router-dom";
import { parseQueryParams } from "src/utlies/commonfunctions";
import { useSearchParams } from "react-router-dom";


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
}

const JobSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const { keyword, category, radius, jobType }: any = jobConfig


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
  });

  const { jobDetails, jobConstManage, categoryCountList } = jobConfig;

  const jobTypes = jobConstManage.filter(item => item.category === 'jobtype');
  const applicantTypes = jobConstManage.filter(item => item.category === 'applicanttype');
  const experienceYearsTypes = jobConstManage.filter(item => item.category === 'experienceyears');

  const searchCategory = [
    {
      title: 'Job Type',
      type: "jobType",
      value: jobTypes
    },
    {
      title: 'Applicant Type',
      type: "applicantType",
      value: applicantTypes
    },
    {
      title: "Experience Years",
      type: "experienceYearsType",
      value: experienceYearsTypes
    }
  ];

  searchCategory.push()

  useEffect(() => {
    dispatch(getCategoryCount())
    const paramsObject = Object.fromEntries(searchParams.entries());
    const queryParams = new URLSearchParams({
      ...paramsObject
    });

    dispatch(getJobsByQuery(queryParams))
  }, [keyword, category, radius, jobType])

  useEffect(() => {
    dispatch(getJobConstManage());
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
      <div className='w-full bg-primaryBlue flex justify-center sticky top-0 shadow-2xl'>
        <SearchBar />
      </div>
      <div className="w-full px-2 py-[25px] mx-auto">
        <JobSearchBoard
          filters={filters}
          GroupData={jobConstManage}
          jobDetailsInfos={jobDetails}
          searchCategory={searchCategory}
          categoryCountList={categoryCountList}
          onSearchChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default JobSearch;
