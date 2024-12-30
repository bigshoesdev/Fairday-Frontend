import React from "react";
import { BsCopy } from "react-icons/bs";
import { BiPaperclip } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BookmarkIcon, CheckCircleIcon, PencilAltIcon } from "@heroicons/react/outline";

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
    <div className="p-5 pb-0">
      <div className="flex justify-between mb-5">
        <div className="flex flex-row gap-5">
            <span className="text-gray-400 text-[18px] font-bold">
              Application received 1 day ago
            </span>
        </div>
        <HiDotsHorizontal />
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col">
        <div className="ml-8 flex mb-3">
          <BsCopy className="w-4 h-4 cursor-pointer opacity-100 hover:opacity-50 mx-6" />
          <BiPaperclip className="w-5 h-5 cursor-pointer opacity-100 hover:opacity-50" />
        </div>
          <div className="flex flex-row gap-[10px] mt-1">
            <img src={userAvatar} className="w-10 h-10" alt="User Avatar" />
            <div className="flex flex-col text-[14px]">
              <span className="mb-2">
                Contact: <span className="text-primaryBlue">{userName}</span>
              </span>
              <span>{userEmail}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-[14px]">
              <span className="mb-3">
            Seniority Level: <span>{jobSeniority}</span>
          </span>
              <span className="mb-3">
            Industry: <span>{jobIndustry}</span>
          </span>
              <span className="mb-2">
            Employment Type: <span>{jobType}</span>
          </span>
        </div>
        <div className="flex flex-col gap-2 text-[13px] mt-[-40px]">
          <button className="px-[18px] bg-white text-gray-500 hover:text-white border-gray-300 rounded-[0px] hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-32">
            <span>SAVE</span>
            <BookmarkIcon className="w-4" />
          </button>
          <button className="px-[18px] bg-white text-gray-500 hover:text-white border-gray-300 rounded-[0px] hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-32">
            <span>INTERVIEW</span>
            <CheckCircleIcon className="w-4" />
          </button>
          <button className="px-[18px] bg-white text-gray-500 hover:text-white border-gray-300 rounded-[0px] hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-32">
            <span>HIRE</span>
            <PencilAltIcon className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
