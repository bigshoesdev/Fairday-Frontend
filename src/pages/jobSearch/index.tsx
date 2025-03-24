import JobSearchBoard from "src/pages/jobSearch/JobSearchBoard";
import MapContent from "src/pages/jobSearch/MapContent";
import SearchBar from 'src/pages/home/SearchBar';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  // const [loading, setLoading] = useState(false)

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const { keyword, category, location, radius, suggestions, jobType, applicantType, experienceYearsType, language, loading }: any = jobConfig

  const webLocation = useLocation();
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

  const jobTypes = jobConstManage.filter((item: any) => item.category === 'jobtype');
  const applicantTypes = jobConstManage.filter((item: any) => item.category === 'applicanttype');
  const experienceYearsTypes = jobConstManage.filter((item: any) => item.category === 'experienceyears');

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

  // useEffect(() => {
  //   if (searchParams) {
  //     dispatch(getCategoryCount())
  //     const paramsObject = Object.fromEntries(searchParams.entries());
  //     const queryParams = new URLSearchParams({
  //       ...paramsObject
  //     });
  //     dispatch(getJobsByQuery(queryParams))
  //   }
  // }, [keyword, category, radius, jobType, searchParams])

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(getCategoryCount())

      const timeStamp = Date.now().toString();
      const queryParams = new URLSearchParams({
        id: timeStamp,
        keyword: keyword,
        category: category || "",
        location: location || "",
        radius: radius || "",
        jobType: jobType || "",
        applicantType: applicantType || "",
        experienceYearsType: experienceYearsType || "",
      });

      navigate(`/job-search?${queryParams.toString()}`);
      dispatch(getJobsByQuery(queryParams))

    }, 800);
    return () => clearTimeout(handler);
  }, [keyword, category, location, radius, suggestions, jobType, applicantType, experienceYearsType, language])


  useEffect(() => {
    if (webLocation.search) {
      dispatch(getJobConstManage());
      const newFilters = parseQueryParams(webLocation.search);
      setFilters(newFilters);
    }
  }, [dispatch, webLocation.search]);

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
      <div className='w-full bg-primaryBlue flex justify-center sticky top-0 shadow-2xl mb-4'>
        <SearchBar />
      </div>
      <div className="w-full px-2 py-[25px] mx-auto">
        <JobSearchBoard
          filters={filters}
          GroupData={jobConstManage}
          jobDetailsInfos={jobDetails}
          searchCategory={searchCategory}
          categoryCountList={categoryCountList}
          loading={loading}
          onSearchChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default JobSearch;
