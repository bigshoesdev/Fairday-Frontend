import React from "react";
import Button from "src/components/common/Button";

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

const JobDetail: React.FC<{ item: JobDetailProps }> = ({ item }) => {
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
    <div className="flex flex-col p-5 bg-white border border-white hover:border-blue-400 rounded-[10px] shadow-lg gap-4">
      <div className="flex justify-between">
        <div className="flex flex-row gap-5">
          <img src={avatar} alt="Company Avatar" />
          <div className="flex flex-col">
            <span className="text-black font-bold text-[16px]">
              {jobTitle}, {jobType}
            </span>
            <span className="text-primaryBlue text-[15px]">
              {company}-<span className="text-black">{jobPosision}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col">
          <span className="text-[14px]">{`Posted ${jobDate} days ago- ${jobApplications} applications`}</span>
          <span>
            Seniority Level: <span>{jobSeniority}</span>
          </span>
          <div className="flex flex-row gap-[10px] mt-1">
            <img src={userAvatar} className="w-10 h-10" alt="User Avatar" />
            <div className="flex flex-col text-[14px]">
              <span>
                Contact: <span className="text-primaryBlue">{userName}</span>
              </span>
              <span>{userEmail}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-[14px]">
          <span>
            Industry: <span>{jobIndustry}</span>
          </span>
          <span>
            Employment Type: <span>{jobType}</span>
          </span>
        </div>
      </div>
      <div>
        <Button
          text="APPLY"
          className="bg-primaryBlue w-full text-white px-6 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
      </div>
    </div>
  );
};

export default JobDetail;
