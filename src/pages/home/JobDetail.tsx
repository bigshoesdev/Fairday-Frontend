import React from 'react';
import { BsCopy } from "react-icons/bs";
import { BiPaperclip } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BookmarkIcon, CheckCircleIcon } from "@heroicons/react/outline"

interface JobDetailProps {
    avatar: string;
    logoImage: string;
    jobTitle: string;
    jobDescription: string;
    jobType: string;
    jobApplications: string;
    jobDate: string;
    country: string;
    userAvatar: string;
    employer: string;
    userName: string;
    userEmail: string;
    jobIndustry: string;
    jobSeniority: string;
    jobPosision: string;
    selectedCategory: any;
    company: string;

    createdAt: string;
    userId: any;
    jobPayRate: string;
    jobCurrency: string;
    jobPay: string;
    otherCategory: string;
    businessName: string;

}

const JobDetail: React.FC<{ item: JobDetailProps }> = ({ item }) => {
    const {
        createdAt,
        jobPayRate,
        jobCurrency,
        jobPay,
        otherCategory,
        avatar,
        logoImage,
        jobTitle,
        jobDescription,
        jobType,
        employer,
        jobApplications,
        jobDate,
        userAvatar,
        country,
        userName,
        userEmail,
        jobIndustry,
        jobSeniority,
        jobPosision,
        selectedCategory,
        userId,
        company,
        businessName
    } = item;

    function daysPassedSince(timestamp) {
        const givenDate: any = new Date(timestamp);
        const today: any = new Date();

        const diffInMs = today - givenDate;

        return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    }

    // Example Usage:
    const timestamp = "2025-02-27T14:59:57.518Z";
    const daysPassed = daysPassedSince(timestamp);

    console.log(`Days passed: ${daysPassed}`);


    return (
        <>
            <div className='w-full flex flex-col p-5 bg-white border border-gray-200 hover:border-blue-400 rounded-lg shadow-lg gap-4 max-w-[672px] hidden sm:block'>
                <div className='flex justify-between'>
                    <div className='flex flex-row gap-5'>
                        <img src={`http://localhost:8000${logoImage}`} alt="Company Avatar" className="w-10 h-10 object-cover rounded-full" />
                        <div className='flex flex-col'>
                            <span className='text-black font-bold text-[16px]'>{jobTitle}, {selectedCategory && selectedCategory.string}</span>
                            <span className='text-primaryBlue text-[15px]'>{employer} - <span className='text-black'>{country}</span></span>
                        </div>
                    </div>
                    <HiDotsHorizontal />
                </div>
                <div className='flex justify-between gap-5 items-start mt-2'>
                    <div className='flex justify-start items-start'>

                        <div className='flex justify-between gap-2'>
                            <BsCopy className='w-4 h-4 cursor-pointer opacity-100 hover:opacity-50' />
                            <BiPaperclip className='w-5 h-5 cursor-pointer opacity-100 hover:opacity-50' />
                        </div>

                        <div className='flex flex-col w-[270px] pl-4'>
                            <span className='text-[14px]'>{`Posted ${daysPassedSince(createdAt)} days ago - ${otherCategory}`}</span>
                            <div className='flex flex-row gap-2 mt-1 '>
                                {userId && userId.avatar &&
                                    <img src={userId.avatar} className='w-10 h-10 rounded-full object-cover' alt="User Avatar" />
                                }
                                <div className='flex flex-col text-[14px] w-full'>
                                    <span>Contact: <span className='text-primaryBlue'>{businessName}</span></span>
                                </div>
                            </div>
                            <div className='flex flex-col text-[14px] pt-2'>
                                <span>Salary Level: {jobPay && jobPayRate}<span className='text-black'> in {jobCurrency}</span></span>
                            </div>
                        </div>
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

            {/* <div className='w-full flex flex-col p-5 bg-white border border-gray-200 hover:border-blue-400 rounded-lg shadow-lg gap-4  block sm:hidden'>
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

                <div>
                {jobDescription.length > 150
                ? `${jobDescription.slice(0, 150)}...`
                : jobDescription}
                </div>

                <div className='flex justify-between w-full items-end'>
                    <div className='flex flex-row gap-2 text-[13px]'>
                        <button className='px-4 py-2 bg-white text-gray-500 hover:text-white border border-gray-300 rounded-md hover:bg-primaryBlue focus:outline-none flex justify-between items-center gap-3'>
                            <span>SAVE</span>
                            <BookmarkIcon className="w-4" />
                        </button>
                        <button className='px-4 py-2 bg-white text-gray-500 hover:text-white border border-gray-300 rounded-md hover:bg-primaryBlue focus:outline-none flex justify-between items-center'>
                            <span>APPLY</span>
                            <CheckCircleIcon className="w-4" />
                        </button>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <BsCopy className='w-4 h-4 cursor-pointer opacity-100 hover:opacity-50' />
                        <BiPaperclip className='w-5 h-5 cursor-pointer opacity-100 hover:opacity-50' />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default JobDetail;
