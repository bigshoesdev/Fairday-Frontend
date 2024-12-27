import JobBanner from "./jobBanner";
import JobCard from "./jobCard";
import JobCount from "./jobCount";
import JobSearchOptions from "./jobSearchOptions";

const JobSearchBoard = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-12 gap-4 pl-20 pr-20">
        {/* Job Search Options */}
        <div className="hidden md:block lg:col-span-2 md:col-span-6 p-4">
          <JobSearchOptions />
        </div>

        {/* Job Count and Job Cards */}
        <div className="col-span-12 lg:col-span-7 md:col-span-6 text-white p-4">
          <JobCount />
          <JobCard />
        </div>

        {/* Job Banners */}
        <div className="hidden lg:block lg:col-span-3 md:hidden p-4">
          <JobBanner src="src/assets/images/search_portal_banner_job.png" />
          <JobBanner src="src/assets/images/search_portal_banner_food.png" />
        </div>

        {/* Job Banners for smaller screens */}
        <div className="block lg:hidden col-span-12 p-4">
          <JobBanner src="src/assets/images/search_portal_banner_job.png" />
          <JobBanner src="src/assets/images/search_portal_banner_food.png" />
        </div>
      </div>
    </div>
  );
};

export default JobSearchBoard;
