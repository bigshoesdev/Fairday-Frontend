import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from 'src/components/common/Button';
import { changeJob } from 'src/store/user/jobSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';

dayjs.extend(relativeTime);

const EndedJobCard = (props: any) => {
    const dispatch = useDispatch<AppDispatch>();

    const { job, GroupData } = props
    const rePublishButton = () => {
        const jobId = job._id;
        const status = 1;

        dispatch(changeJob({ jobId, status }))
    }

    return (
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 w-full mt-5 ">
            <div className="flex items-start">
                <div className="w-[55px] h-[55px] pt-1 flex-shrink-0 bg-cover object-cover" style={{ backgroundImage: `url(https://api.fairdayjobs.com${job.logoImage})` }} />
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

            <Button
                text="RE-PUBLISH JOB"
                onClick={() => rePublishButton()}
                className="font-bold bg-primaryBlue text-white px-6  rounded-[3px] hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            />

            <div className='flex flex-col mt-4'>
                <span className='font-bold text-[16px]'>Applicant Info</span>
                <div className='flex flex-col md:flex-row mt-2 items-center gap-6'>
                    <img src="src/assets/images/user1.png" className='w-[40px] h-[40px]'></img>
                    <div className='flex flex-col gap-1'>
                        <span>Contact: <span className='font-semibold text-blue-500'>Rohit Sharma</span></span>
                        <span className='italic'>rohit.sharma@tecorb.com</span>
                    </div>
                    <div className="bg-gray-400 w-[1px] h-10 hidden md:block"></div>
                    <div className='flex flex-col'>
                        <span className='font-bold text-blue-500'>Rate</span>
                        <div>
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`text-${index < job.jobRate ? "yellow" : "gray"
                                        }-400 text-[22px]`}
                                >
                                    &#9733;
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EndedJobCard;
