import Button from "src/components/common/Button";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const EmailContent = ({ bufferName, bufferEmail }) => {
  const navigate = useNavigate();


  const appProfileConfig = useSelector((state: any) => state.appProfileConfig);
  const decodedIdentify = appProfileConfig.decodedIdentify;

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
      {
        decodedIdentify ? (<>
          <h2 className="text-center title mt-4">
            Congratulations Your an Individual Registered for Hire with Fariday Jobs.
          </h2>

          <p className="text-center mt-4 text-gray-700 text-[20px]">
            Go Get Hired! You can now apply for jobs in a click!
          </p>

          <span className="text-primaryBlue title">IHP # {decodedIdentify}</span>
          <span className="font-bold text-black">VIEW / EDIT PROFILE</span>

          <p className="text-center text-contentText mt-5">
            Keep this number safe to use in applying for the good jobs listed in <span className="text-primaryBlue">Fairdayjobs</span>, lorem in volupate velit esse cilum dolore eu fugiat nulia pariatur.
            Excepteure sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molit anim id est laborum.
          </p>
          <span></span>

          <Button
            text="  COPY BHP NUMBER"
            className="mt-6 bg-primaryBlue text-white px-12 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
        </>) : (<>
          <h2 className="text-center title mt-4">
            Please verify your email {bufferEmail} to complete your registration for Fariday Jobs. Check your inbox for a verification link
          </h2>

        </>)
      }

      <div className="flex justify-center mt-6 flex-col gap-y-10">
        <div className="flex flex-row gap-2 justify-center text-primaryBlue cursor-pointer" onClick={() => navigate('/')}>
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
            FairdayJobs
          </a>{" "}
          Team
        </p>
      </div>
      <hr className="text-black bg-black border-2" />
    </div>
  );
};
export default EmailContent;
