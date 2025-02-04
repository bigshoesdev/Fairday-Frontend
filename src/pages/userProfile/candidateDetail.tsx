import React from "react";
import UserDetail from "../employerDetail/userdDetail";
import UserHistory from "../employerDetail/userHistory";
import JobsSlidaBar from "./jobsSlidebar";

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

const CandidateDetail: React.FC<{ item: JobDetailProps }> = ({ item }) => {
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
  return (
    <div className="bg-blue-100 w-full px-5 py-3 rounded-b-[10px] flex gap-3">
      <div className="flex-[5]">
        <UserDetail item={item} userprofile={true}/>
      </div>
      <div className="flex-[7]">
        <UserHistory userprofile={true}/>
      </div>
    </div>
  );
};
export default CandidateDetail;
