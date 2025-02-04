import Button from "src/components/common/Button";
import { IoHomeOutline } from "react-icons/io5";

const EmailContent = () => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-[950px] flex  items-center flex-col">
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

      <h2 className="text-center title mt-4">
        Applicant Notification Applicantion Submitted <span># AN345678</span>
      </h2>

      <p className="text-center subtitle3 mt-5">
        Dear Applicant ABC, Your application for <span className="text-black font-bold text-[25px] sm:text-[30px]">Job Post</span>
        <span className="text-primaryBlue font-bold text-[25px] sm:text-[30px]"> #JP56789</span> has been submitted to the employer
      </p>

      <div className="w-full flex flex-col xs:flex-row justify-center gap-3">
        <Button
          text="YOUR PROFILE # IHP 123456"
          className="w-full bg-primaryBlue text-white px-12 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
        <Button
          text="WITHDRAW APPLICATION"
          className="w-full bg-primaryBlue text-white px-12 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
      </div>
      <div className="flex justify-center mt-6 flex-col gap-y-10">
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
