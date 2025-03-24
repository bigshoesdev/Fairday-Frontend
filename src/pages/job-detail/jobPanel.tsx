import SecurityIcon from "@mui/icons-material/Security";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "src/components/common/Button";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const JobPanel = ({ ApplyClicked, jobDeatil }: any) => {

  return (
    <div className="w-full max-w-[1200px] mx-10 px-2">
      <div className=" mx-auto bg-white rounded-lg mt-[-150px] pb-[20px] mb-0 shadow-lg overflow-hidden">
        {/* Job Header */}
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[20px] mb-1 font-bold">
                {jobDeatil.jobTitle}
              </h2>
              <p className="text-[16px] text-gray-800">
                Requirements:
                {jobDeatil.applicantType.map((item: any, index: any) =>
                  <span key={index} className="text-gray-500 ml-2">{item.string}</span>
                )}
              </p>
              <a
                href="#"
                className="text-blue-600 text-[16px] font-medium hover:underline"
              >
                {jobDeatil.employer}
              </a>
              {
                false &&
                <p className="text-[14px] text-gray-400">Commercial Employer</p>
              }
            </div>
            <div>
              <img
                src="http://via.placeholder.com/50"
                alt="Map Icon"
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Location and Job Info */}
        <div className="px-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[20px] text-black font-semibold flex items-center">
                <LocationOnOutlinedIcon className="mr-2" />
                {jobDeatil.street}, {jobDeatil.city}, {jobDeatil.country}
              </p>
              <p className="text-[16px] text-gray-500 w-[500px]">
                {jobDeatil.jobDescription.length > 250
                  ? `${jobDeatil.jobDescription.slice(0, 250)}...`
                  : jobDeatil.jobDescription}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[18px] font-bold">{jobDeatil.selectedJobType.string} {jobDeatil.jobPayRate}</p>
              <p className="text-[16px] font-bold">
                <span className="text-blue-600">
                  <SecurityIcon className=" !text-[18px] mr-1" />
                </span>
                Verifed
              </p>
              <p className="text-[16px] font-bold">{dayjs(jobDeatil.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>
        {/* Ratings and Reviews */}
        <div className="px-5">
          <div className="flex items-center gap-2 pb-4 border-b-[1px]">
            <p className="text-[16px] font-bold mb-0 text-gray-600">Ratings</p>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <p className="text-[16px] font-bold mb-0 text-gray-600">
              {jobDeatil.jobRate} stars
            </p>
          </div>
          <p className="text-xs text-gray-400 hidden">(3 Reviews)</p>
        </div>
        {/* Image Carousel */}
        <div className="px-5 mt-4 flex gap-4 flex-wrap">
          {jobDeatil.images.map((item: any, index: any) =>
            <div key={index} className="w-[80px] h-[80px] pt-1 flex-shrink-0 bg-cover object-cover rounded-[8px] shadow-lg" style={{ backgroundImage: `url(https://api.fairdayjobs.com${item})` }} />
          )}
        </div>
        {/* Footer Buttons */}
      </div>
      <div className="flex justify-between items-center  mb-4">
        <div className="w-[90%] ml-[5%]  border-darkBlue border-8 rounded-b-lg">
          <Button
            text="JOB DETAILS"
            className="bg-darkBlue items-center w-[50%] py-5 border-darkBlue hover:border-blue-400 border-r border-r-white rounded-none text-white  text-[20px] hover:bg-blue-400 transition-all cursor-pointer focus:outline-none"
            onClick={() => console.log()}
          />
          <Button
            text="APPLY NOW"
            className="bg-darkBlue items-center w-[50%] py-5 border-darkBlue hover:border-blue-400 border-l rounded-none text-white  text-[20px] hover:bg-blue-400 transition-all cursor-pointer focus:outline-none"
            onClick={ApplyClicked}
          />
        </div>
      </div>
    </div>
  );
};
export default JobPanel;
