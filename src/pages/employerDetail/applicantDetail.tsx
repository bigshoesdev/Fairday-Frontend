import React,{useState} from "react";
import JobDetail from "./JobDetail";
import CandidateDetail from "../userProfile/candidateDetail";

const ApplicantDetail = ({ item, jobDetails, jobConstManage }) => {
  const {
    avatar,
    jobTitle,
    jobType,
    jobApplications,
    jobDate,
    userAvatar,
    userName,
    userEmail,
    jobIndustry,
    jobSeniority,
    jobPosision,
    company,
  } = item;

  const [showCandidateDetail, setShowCandidateDetail] = useState(false);

  console.log('jobDetails', jobDetails);
  

  const handleJobDetailClick = () => {
    setShowCandidateDetail((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full bg-white hover:bg-gray-100 hover:cursor-pointer rounded-[10px] shadow-lg gap-4">
      <div onClick={handleJobDetailClick} className="w-full">
        <JobDetail item={item} jobDetails={jobDetails} jobConstManage={jobConstManage}/>
      </div>
      <div
        className={`transition-all duration-700 ease-in-out ${
          showCandidateDetail ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <CandidateDetail item={item} isHideEdit={true}/>
      </div>
    </div>
  );
};
export default ApplicantDetail;
