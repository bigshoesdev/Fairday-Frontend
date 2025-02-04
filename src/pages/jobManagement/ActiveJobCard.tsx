import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from 'src/components/common/Button';

dayjs.extend(relativeTime);

const ActiveJobCard = (props: any) => {

    const { job, GroupData } = props
    const buttonClick = () => {

    }


    return (
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 w-full mt-5 ">
            <div className="flex items-start">
                <div className="w-[55px] h-[55px] bg-gray-200 rounded-full flex-shrink-0">
                    <img
                        src={`http://localhost:8000${job.logoImage}`}
                        className="w-[50px] h-[55px]"
                        alt="Company Avatar"
                    />
                </div>
                <div className="ml-4 text-[15px] w-full">
                    <a href='/publish_Ad'>
                        <h2 className="text-[20px] font-semibold text-gray-800">
                            {job.jobTitle}
                        </h2>
                    </a>
                    <span className="font-semibold text-gray-400">Requirements:</span>{" "}
                    <span className="font-bold text-black mr-4">
                        {job.applicantType.map((item) => GroupData.find((each) => each._id === item)?.string)}
                    </span>
                    <span className="font-semibold text-gray-400">Employment Type:</span>{" "}
                    <span className="font-bold text-black mr-4">
                        {GroupData.find((each) => each._id === job.selectedJobType)?.string}
                    </span>
                    <span className="font-semibold text-gray-400">Pay:</span>{" "}
                    <span className="font-bold text-black mr-4">{job.jobPay}</span>
                    <span className="font-semibold text-gray-400">Currency:</span>{" "}
                    <span className="font-bold text-black mr-4">{job.jobCurrency}</span>
                    <p className="mt-2">
                        <span className="font-semibold text-blue-600">{job.employer}</span>
                        <span className="ml-2 mr-2 text-gray-400">|</span>
                        <span className="font-semibold text-black">{job.street}</span>
                        <span className="ml-2 mr-2 text-gray-400">|</span>
                        <span className="font-semibold text-black">
                            Commercial Employer
                        </span>
                    </p>
                    <div className="">
                        <p className="text-gray-500 text-[16px]">
                            {job.jobDescription.length > 250
                                ? `${job.jobDescription.slice(0, 250)}...`
                                : job.jobDescription}
                        </p>
                    </div>      

                    <Button
                        text="RE-PUBLISH JOB"
                        onClick={buttonClick}
                        className="font-bold bg-primaryBlue text-white px-6  rounded-[3px] hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                    />

                    <div className='flex flex-col mt-4'>
                        <span className='font-bold text-[16px]'>Applicant Info</span>
                        <div className='flex flex-row justify-between mt-2 items-center'>
                            <img src="src/assets/images/user1.png" className='w-[40px] h-[40px]'></img>
                            <div className='flex flex-col gap-1'>
                                <span>Contact: <span className='font-semibold text-blue-500'>Rohit Sharma</span></span>
                                <span className='italic'>rohit.sharma@tecorb.com</span>
                            </div>
                            <div className="bg-gray-400 w-[1px] h-10"></div>
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
                            <div className="bg-gray-400 w-[1px] h-10"></div>
                            <Button
                                text="END JOB"
                                onClick={buttonClick}
                                className="font-bold bg-blue-50 border border-red-500 text-red-500 px-6  rounded-[3px] hover:bg-gray-100 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ActiveJobCard;
