import React,{useState} from "react";
import JobDetail from "./JobDetail";
import CandidateDetail from "../userProfile/candidateDetail";
interface JobDetailProps {
  avatar: string;
  jobTitle: string;
  jobType: string;
  jobApplications: string;
  jobDate: string;
  userAvatar: string;
  userName: string;
  userEmail: string;
  jobIndustry: string;
  jobSeniority: string;
  jobPosision: string;
  company: string;
}

const ApplicantDetail: React.FC<{ item: JobDetailProps }> = ({ item }) => {
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

  const handleJobDetailClick = () => {
    setShowCandidateDetail((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full bg-white hover:bg-gray-100 hover:cursor-pointer rounded-[10px] shadow-lg gap-4">
      <div onClick={handleJobDetailClick} className="w-full">
        <JobDetail item={item} />
      </div>
      <div
        className={`transition-all duration-700 ease-in-out ${
          showCandidateDetail ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <CandidateDetail item={item}/>
      </div>
    </div>
  );
};
export default ApplicantDetail;
