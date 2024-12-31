import SecurityIcon from "@mui/icons-material/Security";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "src/components/common/Button";
const JobPanel = () => {
  return (
    <div className="w-full max-w-[1200px] mx-10">
      <div className=" mx-auto bg-white rounded-lg mt-[-150px] pb-[20px] mb-0 shadow-lg overflow-hidden">
        {/* Job Header */}
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[20px] mb-1 font-bold">
                Airplane Mechanical Technician
              </h2>
              <p className="text-[16px] text-gray-500">
                Requirements: Certification FAA
              </p>
              <a
                href="#"
                className="text-blue-600 text-[16px] font-medium hover:underline"
              >
                Air Trans Global Inc.
              </a>
              <p className=" text-[14px] text-gray-400">Commercial Employer</p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/50"
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
                Laguardia, NY
              </p>
              <p className="text-[16px] text-gray-500 w-[500px]">
                64 Ground Staff jobs available at our LaGuardia Airport
                location, Airport Mechanical Technicians, Flight Attendants,
                Airport ticket checking staff and many job vacancies.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[18px] font-bold">Full time $85.00 /Hr</p>
              <p className="text-[16px] font-bold">
                <span className="text-blue-600">
                  <SecurityIcon className=" !text-[18px] mr-1" />
                </span>
                Verifed
              </p>
              <p className="text-[16px] font-bold">Posted today</p>
            </div>
          </div>
        </div>
        {/* Ratings and Reviews */}
        <div className="px-5 mt-4">
          <div className="flex items-center gap-2">
            <p className="text-[16px] mt-5 font-bold text-gray-600">Ratings</p>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <span className="text-yellow-400 text-[20px]">&#9733;</span>
            <p className="text-[16px] mt-5  font-bold text-gray-600">
              4.5 stars
            </p>
          </div>
          <p className="text-xs text-gray-400">(3 Reviews)</p>
        </div>
        {/* Image Carousel */}
        <div className="px-5 mt-4 flex gap-2">
          <img
            src="https://via.placeholder.com/100"
            alt="Job Image 1"
            className="w-[100px] h-auto rounded-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Job Image 2"
            className="w-[100px] h-auto rounded-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Job Image 3"
            className="w-[100px] h-auto rounded-md"
          />
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
          onClick={() => console.log()}
        />
        </div>
      </div>
    </div>
  );
};
export default JobPanel;
