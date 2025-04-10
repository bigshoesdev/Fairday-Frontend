import { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from 'src/components/common/Button';
import { changeJob } from 'src/store/user/jobSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import ConfirmModal from 'src/pages/jobManagement/ConrimModal';
import { useNavigate } from 'react-router-dom';


dayjs.extend(relativeTime);

const NewJobCard = (props: any) => {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const { job, GroupData } = props
    const buttonClick = () => {

    }

    const viewButtonClick = () => {
        navigate(`/employer-detail/${job._id}`)
    }

    const endButtonClick = () => {
        setIsModalOpen(true)
    }



    return (
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 w-full mt-5 ">
            <div className="flex items-start">
                <div className="w-[55px] h-[55px] pt-1 flex-shrink-0 bg-cover object-cover" style={{ backgroundImage: `url(http://localhost:8000${job.logoImage})` }} />
                <div className="ml-4 text-[15px] w-full">
                    <a href={`/job-detail/?id=${job._id}`}>
                        <h2 className="text-[20px] font-semibold text-gray-800">
                            {job.jobTitle}
                        </h2>
                    </a>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='flex justify-start items-center flex-wrap'>
                            <p className="font-semibold text-gray-800 mr-2">Requirements:</p>
                            {job.applicantType.map((item: any, index: any) =>
                                <p key={index} className='text-gray-600 font-bold mr-2 underline'>{item.string}</p>
                            )}
                            <div className='flex justify-start items-center flex-wrap'>
                                <span className="font-semibold text-gray-800 mr-2">Employment Type:</span>{" "}
                                <span className="text-gray-600 font-bold text-black mr-1">
                                    {job.selectedJobType.string}
                                </span>
                                <span className="text-gray-600 font-bold text-black mr-4">{job.jobPayRate}</span>
                            </div>

                            {job.jobCurrency &&
                                <div>
                                    <span className="font-semibold text-gray-400">Currency:</span>{" "}
                                    <span className="font-bold text-black mr-4">{job.jobCurrency}</span>
                                </div>
                            }

                        </div>
                    </div>

                    <p className="mt-2">
                        <span className="font-semibold text-blue-600">{job.employer}</span>
                        <span className="ml-2 mr-2 text-gray-400">|</span>
                        <span className="font-semibold text-black">{job.street}, {job.userCity}, {job.country}</span>
                        {
                            false &&
                            <span className="ml-2 mr-2 text-gray-400">|</span>
                        }
                        {
                            false &&
                            <span className="font-semibold text-black"> Commercial Employer </span>
                        }
                    </p>

                    <div className=" hidden md:block">
                        <p className="text-gray-500 text-[16px]">
                            {job.jobDescription.length > 150
                                ? `${job.jobDescription.slice(0, 150)}...`
                                : job.jobDescription}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-[-10px] hidden md:block">
                        <div className="flex items-center">
                            <span className='text-gray-600 mb-0 mr-1 font-bold'>{job.jobRate}</span>
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`text-${index < job.jobRate ? "yellow" : "gray"
                                        }-400 text-[22px]`}
                                >
                                    &#9733;
                                </span>
                            ))}
                            <span className="ml-3 text-[15px] text-gray-400">
                                Based on {job.reviewsCount} Reviews
                            </span>
                        </div>
                        <span className="flex justify-end text-[15px] text-gray-500">{dayjs(job.createdAt).fromNow()}</span>
                    </div>

                </div>

            </div>

            <div className='block px-2 md:hidden'>
                <p className="text-gray-500 text-[16px]">
                    {job.jobDescription.length > 150
                        ? `${job.jobDescription.slice(0, 150)}...`
                        : job.jobDescription}
                </p>
                <div className="flex items-center justify-start mt-[-10px]">
                    <span className='text-gray-600 mb-0 mr-1 font-bold'>{job.jobRate}</span>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`text-${index < job.jobRate ? "yellow" : "gray"}-400 text-[22px]`}
                            >
                                &#9733;
                            </span>
                        ))}
                        <span className="ml-3 text-[15px] text-gray-400">
                            Based on {job.reviewsCount} Reviews
                        </span>
                    </div>
                </div>

                {/* Wrap the span in a flex container */}
                <div className="flex justify-end mt-2">
                    <span className="text-[15px] text-gray-500">
                        {dayjs(job.createdAt).fromNow()}
                    </span>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-4 mt-2'>
                <Button
                    text="VIEW/EDIT"
                    onClick={() => viewButtonClick()}
                    className="font-bold bg-tealGray text-white px-4 rounded-[3px] hover:bg-gray-500 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                />
                <Button
                    text="ENHANCE DISTRIBUTION"
                    onClick={buttonClick}
                    className="font-bold bg-tealGray text-white px-4 rounded-[3px] hover:bg-gray-500 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                />
                <Button
                    text="END JOB"
                    onClick={() => endButtonClick()}
                    className="font-bold bg-blue-50  text-red-500 px-6 rounded-[3px] border-red-500 hover:bg-gray-100 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                />
                <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={job} />

            </div>
        </div>
    );
};


export default NewJobCard;
