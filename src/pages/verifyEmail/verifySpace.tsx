import Button from "src/components/common/Button";

const VerifySpace = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <div className="flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
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

      <h2 className="text-center text-2xl font-semibold mt-4">
        Verify your <span className="text-blue-600">email address</span>
      </h2>

      <p className="text-center mt-4 text-gray-700">
        Welcome <strong>FAIRDAY JOBSEEKER</strong>,
      </p>
      <p className="text-center mt-1 text-gray-700">
        We have received a query you sent for job listings in your area. Please
        verify your email ID.
      </p>
      <p className="text-center mt-4 text-gray-500">
        Please confirm your email address by clicking the button below
      </p>
      <div className="flex justify-center mt-6">
        <Button
          text="VERIFY EMAIL ADDRESS & SET PASSWORD"
          className="bg-primaryBlue text-white px-6 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
      </div>
      <p className="text-center mt-6 text-gray-500 text-sm">
        Or, paste this link into your browser:
      </p>
      <a
        href="https://www.fairdayjobs.com/account_verification?code=examplecode"
        className="text-blue-600 text-center block mt-1 break-all"
      >
        https://www.fairdayjobs.com/account_verification?code=MjAyOTUyNTE1
      </a>
      <div className="text-center mt-6 text-gray-600 text-[16px] font-semibold">
        <p>THANKS & REGARDS,</p>
        <p>
          <a
            href="https://www.fairdayjobs.com"
            className="font-semibold text-blue-600"
          >
            FairDayJobs.com
          </a>{" "}
          Team
        </p>
      </div>
    </div>
  );
};
export default VerifySpace;
