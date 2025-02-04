import React from 'react';
import { BsCopy } from "react-icons/bs";
import { BiPaperclip } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
interface JobDetailProps {
    avatar: string;
    jobTitle: string,
    jobType: string,
    jobApplications: string,
    jobDate: string,
    userAvatar: string,
    userName: string,
    userEmail: string,
    jobIndustry: string,
    jobSeniority: string,
    jobPosision: string,
    company: string
}

const ShortlistedCard: React.FC<{ item: JobDetailProps }> = ({ item }) => {
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
        <div className='flex flex-col p-5 bg-blue-50 hover:border-blue-400 rounded-[10px] shadow-lg gap-4'>
            <div className='flex flex-row justify-between'>

                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between'>
                        <div className='flex flex-row gap-5 '>
                            <img src={avatar} alt="Company Avatar" />
                            <div className='flex flex-col'>
                                <span className='text-black font-bold text-[16px]'>{jobTitle}, {jobType}</span>
                                <span className='text-primaryBlue text-[15px]'>{company}-<span className='text-black'>{jobPosision}</span></span>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between gap-5'>
                        <div className='flex justify-between gap-[10px]'>
                            <BsCopy className='w-4 h-4 cursor-pointer opacity-100 hover:opacity-50' />
                            <BiPaperclip className='w-5 h-5 cursor-pointer opacity-100 hover:opacity-50' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[14px]'>{`Posted ${jobDate} days ago`}</span>
                            <div className='flex flex-row gap-[10px] mt-1'>
                                <img src={userAvatar} className='w-10 h-10' alt="User Avatar" />
                                <div className='flex flex-col text-[14px]'>
                                    <span>Contact: <span className='text-primaryBlue font-bold'>{userName}</span></span>
                                    <span>{userEmail}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <span>Seniority Level: <span className='font-bold'>{jobSeniority}</span></span>
                            <span>Industry: <span className='font-bold'>{jobIndustry}</span></span>
                            <span>Employment Type: <span className='font-bold'>{jobType}</span></span>
                        </div>
                    </div>
                </div>

                <div className='flex-col flex gap-1'>
                    <div className='flex justify-end mr-[-10px]'><HiDotsHorizontal /></div>
                    <button className='px-[18px] bg-white text-gray-500 hover:text-white border-gray-300 rounded-[0px] hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-36'>
                        <span className='text-[13px]'>VIEW PROFILE</span>
                        <IoMdEye  className="w-4" />
                    </button>
                    <button className='px-[18px] bg-white text-gray-500 hover:text-white border-gray-300 rounded-[0px] hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-36'>
                        <span className='text-[13px]'>INTERVIEW</span>
                        <IoMdCheckboxOutline className="w-4" />
                    </button>
                    <button className='px-[18px] bg-white text-gray-500 hover:text-white border-gray-300 rounded-[0px] hover:bg-primaryBlue focus:outline-none flex justify-between items-center w-36'>
                        <span className='text-[13px]'>REMOVE</span>
                        <MdOutlineCancel className="w-4" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ShortlistedCard