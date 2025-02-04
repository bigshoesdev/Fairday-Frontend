import Button from "src/components/common/Button";
import { IoHomeOutline } from "react-icons/io5";

const EmailContent = () => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-[950px] flex items-center flex-col">
      <div className="flex justify-center flex-col items-center">
        <span className="text-[20px]">Email Receipt:</span>
        <div className="w-16 h-16 flex items-center justify-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
          >
            <rect
              x="8"
              y="16"
              width="48"
              height="32"
              rx="4"
              ry="4"
              fill="#2d3e50"
            />
            <polyline
              points="8 16, 32 32, 56 16"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="52" cy="16" r="10" fill="#2ce4d5" />
            <polyline
              points="48 16, 50 19, 56 12"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className="text-center subtitle3 mt-4">
        Employer Hire Confirmation <span className="text-primaryBlue">#HC654321</span>
      </span>
      <span className="font-bold text-center text-[25px] sm:text-[30px] mt-4">
        Job Post <span className="text-primaryBlue">#JP56789</span>
      </span>

      <span className="text-center mt-4 text-gray-700 subtitle3">
        Congratulations Employer XYZ, You have
      </span>
      <span className="font-bold text-[25px] sm:text-[30px]">Hired Applicant ABC</span>
      <span className="font-bold text-[25px] sm:text-[30px] mt-4">
        Profile: <span className="text-primaryBlue font-normal title"># IHP 123456</span>
      </span>
      <span className="font-bold"> 30 DAY EXP.</span>
      <span className="text-primaryBlue subtitle3 mt-3">View Profile</span>
      <span className="font-bold subtitle3 mt-3 text-center">Phone: <span className="text-primaryBlue">(800) 123-4589</span> | Email: <span className="text-primaryBlue">email@gmail</span></span>

      <div className="w-full flex gap-3 mt-8 justify-center flex flex-col sm:flex-row">
        <div className="flex flex-col items-center gap-4">
          <Button
            text="RATE EMPLOYER"
            className="w-full bg-primaryBlue py-4  px-5 text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
          <span className="font-bold text-black text-[13px]">30 DAY EXP.</span>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <Button
            text="END EMPLOMENT"
            className="w-full bg-primaryBlue py-4 px-5 text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
          <span className="font-bold text-black text-[13px]">SEND NOTICE TO APPLICANT</span>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <Button
            text="END JOB POST"
            className="w-full bg-primaryBlue py-4 text-white px-5 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
        </div>

      </div>

      <div className="flex justify-between mt-6 flex-col gap-y-10">


        <div className="flex flex-row gap-2 justify-center text-primaryBlue cursor-pointer">
          <IoHomeOutline className="text-[20px]" />
          <span>Go Back to Home</span>
        </div>

      </div>

      <div className="text-center mt-6 text-black text-[20px] font-semibold">
        <p>THANKS & REGARDS,</p>
        <p>
          <a
            href="https://www.fairdayjobs.com"
            className="font-semibold text-primaryBlue"
          >
            FairDayJobs.com
          </a>{" "}
          Team
        </p>
      </div>
      <hr className="text-black bg-black border-2" />
    </div>
  );
};
export default EmailContent;
