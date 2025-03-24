import Button from "src/components/common/Button";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EmailContent = ({bufferEmail}) => {

  const advertisementConfig = useSelector((state: any) => state.advertisementConfig);
  const decodedToken = advertisementConfig?.decodedToken;
  const navigate = useNavigate();

  console.log('decodedTokendecodedToken', decodedToken);
  


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
        decodedToken.email ? (<>
          <h2 className="text-center title mt-4">
            Published Advertisement Confirmation
          </h2>

          <span className="text-center subtitle3 mt-5">
            Congratulations <span className="text-blue-500 font-bold">{decodedToken.name}</span> , Your <span className="font-bold text-primaryBlue">Advertisement</span> is ready for Publish with Fariday Jobs.
          </span>
          <span className="subtitle3  text-center">Please review your post and make any corrections as needed.</span>

          <Button
            text="PUBLISH JOB"
            className="w-full sm:w-auto py-4 mt-10 bg-primaryBlue text-white px-28 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />

          <div className="w-full flex-col sm:flex-row flex gap-3 mt-10 justify-center">
            <div className=" flex flex-col items-center gap-4 w-full">
              <Button
                text="VIEW AD"
                className="bg-primaryBlue py-4 w-full text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                onClick={() => console.log()}
              />
            </div>
            <div className=" flex flex-col items-center gap-4 w-full">
              <Button
                text="EDIT AD"
                className="bg-primaryBlue py-4 w-full text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                onClick={() => console.log()}
              />
            </div>
            <div className=" flex flex-col items-center gap-4 w-full">
              <Button
                text="REMOVE AD POST"
                className="bg-primaryBlue py-4 text-white w-full hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                onClick={() => console.log()}
              />
              <span className="font-bold">ARCHIVE TO REGISTRANT</span>
            </div>
          </div>
        </>) : (<>
          <h2 className="text-center title mt-4">
            Please verify your email {bufferEmail} to publish your advertisement in Fariday Jobs service. Check your inbox for a verification link
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
