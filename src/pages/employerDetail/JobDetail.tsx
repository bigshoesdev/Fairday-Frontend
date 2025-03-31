import React from "react";
import { BsCopy } from "react-icons/bs";
import { BiPaperclip } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BookmarkIcon, CheckCircleIcon, PencilAltIcon } from "@heroicons/react/outline";
import { AnymatchFn } from "vite";

const JobDetail = ({ item, jobDetails, jobConstManage }) => {

  console.log('jobDetails', jobDetails);
  const jobType = jobConstManage.filter((item: any) => item._id === jobDetails.selectedJobType)
  const industry = jobConstManage.filter((item: any) => item._id === jobDetails.selectedCategory)
  const level = jobConstManage.filter((item: any) => item._id === jobDetails.applicantType[0])




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
          {/* <div className="ml-8 flex mb-3">
          <BsCopy className="w-4 h-4 cursor-pointer opacity-100 hover:opacity-50 mx-6" />
          <BiPaperclip className="w-5 h-5 cursor-pointer opacity-100 hover:opacity-50" />
        </div> */}
          <div className="flex flex-row gap-[10px] mt-1">
            <img src={`https://api.fairdayjobs.com/${item?.selectedIdPic}`} className="w-12 h-12 rounded-full object-cover" alt="User Avatar" />
            <div className="flex flex-col text-[14px]">
              <span className="mb-2">
                Contact: <span className="text-primaryBlue">{item?.firstName} {item?.lastName}</span>
              </span>
              <span>{item?.email}</span>
            </div>
          </div>
          <div className="ml-8 flex mt-3">
            <BsCopy className="w-4 h-4 cursor-pointer opacity-100 hover:opacity-50 mx-6" />
            <BiPaperclip className="w-5 h-5 cursor-pointer opacity-100 hover:opacity-50" />
          </div>
        </div>

        <div className="flex flex-col text-[14px]">
          <span className="mb-3">
            Seniority Level: <span className="text-gray-800 font-semibold">{level[0]?.string}</span>
          </span>
          <span className="mb-3">
            Industry: <span className="text-gray-800 font-semibold">{industry[0]?.string}</span>
          </span>
          <span className="mb-2">
            Employment Type: <span className="text-gray-800 font-semibold">{jobType[0]?.string}</span>
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
