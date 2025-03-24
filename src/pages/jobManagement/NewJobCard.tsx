import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from 'src/components/common/Button';

dayjs.extend(relativeTime);

const NewJobCard = (props: any) => {

    const { job, GroupData } = props
    const buttonClick = () => {

    }


    return (
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 w-full mt-5 ">
            <div className="flex items-start">
                <div className="w-[55px] h-[55px] bg-gray-200 rounded-full flex-shrink-0">
                    <img
                        src={`https://api.fairdayjobs.com${job.logoImage}`}
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
                    <div className="flex items-center justify-between mt-[-15px]">
                        <div className="flex items-center">
                            <span className="text-[15px] text-gray-600 mr-2">{job.jobRate}</span>
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
                        <span className="text-[15px] text-gray-500">Poested {dayjs(job.createdAt).fromNow()}</span>
                    </div>
                    <div className='flex flex-row gap-4 mt-2'>
                        <Button
                            text="VIEW/EDIT"
                            onClick={buttonClick}
                            className="font-bold bg-tealGray text-white px-4 rounded-[3px] hover:bg-gray-500 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                        />
                         <Button
                            text="ENHANCE DISTRIBUTION"
                            onClick={buttonClick}
                            className="font-bold bg-tealGray text-white px-4 rounded-[3px] hover:bg-gray-500 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                        />
                          <Button
                            text="END JOB"
                            onClick={buttonClick}
                            className="font-bold bg-blue-50  text-red-500 px-6 rounded-[3px] hover:bg-gray-100 transition-all cursor-pointer hover:border-gray-500 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NewJobCard;
