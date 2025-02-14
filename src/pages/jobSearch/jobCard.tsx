import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const JobCard = (props: any) => {

  const { job, GroupData } = props

  return (
    <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 w-full mt-5 flex flex-col">
      <div className="flex items-start ">
        <div className="w-[55px] h-[55px] pt-1 flex-shrink-0">
          <img
            src={`http://localhost:8000${job.logoImage}`}
            className="h-[20px]"
            alt="Company Avatar"
          />
        </div>
        <div className="ml-4 text-[15px] w-full">
          <a href={`/publish_Ad/?id=${job._id}`}>
            <h2 className="text-[20px] font-semibold text-gray-800">
              {job.jobTitle}
            </h2>
          </a>
          <div className='flex flex-col lg:flex-row'>
            <div>
              <span className="font-semibold text-gray-400">Requirements:</span>{" "}
              <span className="font-bold text-black mr-4">
                {job.applicantType.map((item) => GroupData.find((each) => each._id === item)?.string)}
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-400">Employment Type:</span>{" "}
              <span className="font-bold text-black mr-4">
                {GroupData.find((each) => each._id === job.selectedJobType)?.string}
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-400">Currency:</span>{" "}
              <span className="font-bold text-black mr-4">{job.jobCurrency}</span>
            </div>
          </div>

          <p className="mt-2">
            <span className="font-semibold text-blue-600">{job.employer}</span>
            <span className="ml-2 mr-2 text-gray-400">|</span>
            <span className="font-semibold text-black">{job.street}</span>
            <span className="ml-2 mr-2 text-gray-400">|</span>
            <span className="font-semibold text-black">
              Commercial Employer
            </span>
          </p>

          <div className=" hidden md:block">
            <p className="text-gray-500 text-[16px]">
              {job.jobDescription.length > 250
                ? `${job.jobDescription.slice(0, 250)}...`
                : job.jobDescription}
            </p>
          </div>

          <div className="flex items-center justify-between mt-[-10px] hidden md:block">
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
            <span className="flex justify-end text-[15px] text-gray-500">{dayjs(job.createdAt).fromNow()}</span>
          </div>
        </div>
      </div>

      <div className='block md:hidden'>
        <div className="">
          <p className="text-gray-500 text-[16px]">
            {job.jobDescription.length > 250
              ? `${job.jobDescription.slice(0, 250)}...`
              : job.jobDescription}
          </p>
        </div>
        <div className="flex items-center justify-between mt-[-10px]">
          <div className="flex items-center">
            <span className="text-[15px] text-gray-600 mr-2">{job.jobRate}</span>
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


    </div>
  );
};

export default JobCard;