import React from 'react';
import { BsCopy } from "react-icons/bs";
import { BiPaperclip } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BookmarkIcon, CheckCircleIcon } from "@heroicons/react/outline"

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
        <>
            <div className='flex flex-col p-5 bg-white border border-gray-200 hover:border-blue-400 rounded-lg shadow-lg gap-4 max-w-[672px] hidden sm:block'>
                <div className='flex justify-between'>
                    <div className='flex flex-row gap-5'>
                        <img src={avatar} alt="Company Avatar" className="w-10 h-10 object-cover rounded-full" />
                        <div className='flex flex-col'>
                            <span className='text-black font-bold text-[16px]'>{jobTitle}, {jobType}</span>
                            <span className='text-primaryBlue text-[15px]'>{company} - <span className='text-black'>{jobPosision}</span></span>
                        </div>
                    </div>
                    <HiDotsHorizontal />
                </div>
                <div className='flex justify-between gap-5 items-end'>
                    <div className='flex justify-between gap-2'>
                        <BsCopy className='w-4 h-4 cursor-pointer opacity-100 hover:opacity-50' />
                        <BiPaperclip className='w-5 h-5 cursor-pointer opacity-100 hover:opacity-50' />
                    </div>

                    <div className='flex flex-col w-[270px]'>
                        <span className='text-[14px]'>{`Posted ${jobDate} days ago - ${jobApplications} applications`}</span>
                        <div className='flex flex-row gap-2 mt-1 '>
                            <img src={userAvatar} className='w-10 h-10 rounded-full object-cover' alt="User Avatar" />
                            <div className='flex flex-col text-[14px] w-full'>
                                <span>Contact: <span className='text-primaryBlue'>{userName}</span></span>
                                <span>{userEmail}</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col text-[14px] gap-1'>
                        <span>Seniority Level: <span className='text-black'>{jobSeniority}</span></span>
                        <span>Industry: <span className='text-black'>{jobIndustry}</span></span>
                        <span>Employment Type: <span className='text-black'>{jobType}</span></span>
                    </div>

                    <div className='flex flex-col gap-2 text-[13px]'>
                        <button className='px-4 py-2 bg-white text-gray-500 hover:text-white border border-gray-300 rounded-md hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-28'>
                            <span>SAVE</span>
                            <BookmarkIcon className="w-4" />
                        </button>
                        <button className='px-4 py-2 bg-white text-gray-500 hover:text-white border border-gray-300 rounded-md hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-28'>
                            <span>APPLY</span>
                            <CheckCircleIcon className="w-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col p-5 bg-white border border-gray-200 hover:border-blue-400 rounded-lg shadow-lg gap-4  block sm:hidden'>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-row gap-5'>
                        <img src={avatar} alt="Company Avatar" className="w-10 h-10 object-cover rounded-full" />
                        <div className='flex flex-col'>
                            <span className='text-black font-bold text-[16px]'>{jobTitle}, {jobType}</span>
                            <span className='text-primaryBlue text-[15px]'>{company} - <span className='text-black'>{jobPosision}</span></span>
                        </div>
                    </div>
                    <HiDotsHorizontal />
                </div>

                <div className='flex justify-between w-full items-end'>
                    <div className='flex flex-row gap-2 text-[13px]'>
                        <button className='px-4 py-2 bg-white text-gray-500 hover:text-white border border-gray-300 rounded-md hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-28'>
                            <span>SAVE</span>
                            <BookmarkIcon className="w-4" />
                        </button>
                        <button className='px-4 py-2 bg-white text-gray-500 hover:text-white border border-gray-300 rounded-md hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-28'>
                            <span>APPLY</span>
                            <CheckCircleIcon className="w-4" />
                        </button>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <BsCopy className='w-4 h-4 cursor-pointer opacity-100 hover:opacity-50' />
                        <BiPaperclip className='w-5 h-5 cursor-pointer opacity-100 hover:opacity-50' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetail;
