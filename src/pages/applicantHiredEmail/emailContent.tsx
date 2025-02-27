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

      <span className="text-center title mt-4">
        Applicant Your Hired
      </span>
      <span className="text-center title">
        Hire Confirmation #HC654321
      </span>

      <p className="text-center mt-4 text-gray-700 subtitle3">
        Dear <span className="text-[25px] font-bold">Applicant ABC</span>, Congratultions! You have been hired for <span className="text-[25px] sm:text-[30px] font-bold">Job Post</span> <span className="text-[25px] sm:text-[30px] font-bold text-primaryBlue"># JP5678</span>
        . Please contact your Employer for Employment instructoins. "Remember, you are officially hired and ratings are in effect."
      </p>
      <div className="w-full flex flex-col sm:flex-row justify-between px-16 gap-10">
        <div className="w-full flex flex-col items-center gap-4">
          <Button
            text="RATE EMPLOYER"
            className="w-full bg-primaryBlue py-2 xs:py-4 text-white w-full hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
          <span className="font-bold text-black text-[14px] sm:text-[18px]">30 DAY EXP.</span>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <Button
            text="END EMPLOYER"
            className="w-full bg-primaryBlue py-2 xs:py-4 text-white w-full hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
          <span className="font-bold text-primaryBlue text-[14px] sm:text-[18px] text-center">GIVE TIME NOTICE | EMAIL EMPOYER</span>
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
            href="https://fairdayjobs.com"
            className="font-semibold text-primaryBlue"
          >
            Fairdayjobs
          </a>{" "}
          Team
        </p>
      </div>
      <hr className="text-black bg-black border-2" />
    </div>
  );
};
export default EmailContent;
