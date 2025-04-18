import { jobs } from "src/mock/jobList.json";
import ApplicantDetail from "./applicantDetail";

const ApplicantsList = ({ jobConstManage, jobDetails, allApplicants }) => {

  console.log('allApplicants', allApplicants);
  

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" py-4 gap-4 flex flex-col w-[800px]  justify-center items-center mb-12">
        <span className="text-[30px] font-semibold text-left w-full flex-col justify-center items-center">
          All Applicants
        </span>
        {allApplicants.map((item, index) => (
          <ApplicantDetail key={index} item={item} jobDetails={jobDetails} jobConstManage={jobConstManage} />
        ))}
      </div>
    </div>
  );
};

export default ApplicantsList;
