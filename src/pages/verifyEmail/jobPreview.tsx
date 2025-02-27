import { jobs } from "src/mock/jobList.json";
import JobDetail from "./JobDetail";
import Button from "src/components/common/Button";
import { useNavigate } from "react-router-dom";

const JobPreviews = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full bg-[#fafafa]">
      <h2 className="text-blue-500 text-center text-2xl font-semibold pt-4">
        Top Recent Job
      </h2>
      <h3 className="text-center text-lg font-semibold mt-3">
        - Let Emplyers Find You -
      </h3>
      <h4 className="text-blue-500 text-center text-lg font-semibold mt-2">
        {" "}
        Post Your Jobs
      </h4>
      <div className="flex items-center flex-col">
        <div className="p-10 justify-between items-center grid xs:grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((item, index) => (
            <JobDetail key={index} item={item} />
          ))}
        </div>
        <Button
          text="SEE ALL JOBS"
          className="bg-primaryBlue text-white px-12 hover:bg-blue-400 transition-all cursor-pointer mb-8 hover:border-blue-400 focus:outline-none"
          onClick={() => navigate('/job-search')}
        />
      </div>
    </div>
  );
};

export default JobPreviews;
