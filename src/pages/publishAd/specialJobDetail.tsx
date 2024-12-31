import Button from "src/components/common/Button";
import FlagIcon from "@mui/icons-material/Flag";

const SpecialJobDetail = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-5 px-10 rounded-lg mt-5 mb-10 shadow-lg overflow-hidden">
      <p className="text-[30px] font-semibold">Special Job Details</p>
      <p className="text-[14px] mb-1 text-gray-500">
        Advance technical skills are required for this job position.
        <br />
        Applicant must have up to date FAA technical certifications with Grumman
        brand Software integrated Mechanical Systems listed below:
        <br />
        <br />
        -turbine sensor Engine Code Analysis
        <br />
        -Fuel System Relay Diagnostics
        <br />
        -Advanced High Torc Braking Systems
      </p>
      <p className="text-[30px] font-semibold">Q & A</p>
      <Button
        text="Ask Employer a Question"
        className="bg-darkBlue items-center py-2 border-darkBlue hover:border-blue-400 border-r border-r-white text-white !font-medium text-[20px] hover:bg-blue-400 transition-all cursor-pointer focus:outline-none"
        onClick={() => console.log()}
      />
      <div>
        <p className="text-[18px] mt-4 font-semibold">Comment History (2)</p>
        <p className="text-[14px] mt-4 font-bold">
          usename <span className="text-gray-400 font-thin">2 min ago</span>
        </p>
        <p className="text-[14px] mt-4 text-gray-400 font-thin">
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies. My passion lies in creating
          dynamic, user-friendly applications, ensuring seamless functionality
          and a polished user experience. I thrive on solving complex problems
          and enjoy working across the entire tech stack, from crafting sleek
          interfaces to optimizing backend performance. Confident in my ability
          to deliver high-quality solutions, I’m always looking for creative
          challenges that push the boundaries of what’s possible in web
          development.
        </p>
        <hr />
      </div>
      <div className="mb-5">
        <p className="text-[18px] mt-4 font-semibold">Comment History (2)</p>
        <p className="text-[14px] mt-4 font-bold">
          usename <span className="text-gray-400 font-thin">2 min ago</span>
        </p>
        <p className="text-[14px] mt-4 text-gray-400 font-thin">
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies. My passion lies in creating
          dynamic, user-friendly applications, ensuring seamless functionality
          and a polished user experience. I thrive on solving complex problems
          and enjoy working across the entire tech stack, from crafting sleek
          interfaces to optimizing backend performance. Confident in my ability
          to deliver high-quality solutions, I’m always looking for creative
          challenges that push the boundaries of what’s possible in web
          development.
        </p>
        <hr />
      </div>
      <div>
        <Button
          text="Flag Post"
          className="bg-darkBlue items-center py-2 border-darkBlue hover:border-blue-400 border-r border-r-white text-white !font-medium text-[20px] hover:bg-blue-400 transition-all cursor-pointer focus:outline-none"
          onClick={() => console.log()}
        />
        <FlagIcon className=" ml-10 !text-[30px] text-blue-500" />
        <FlagIcon className=" ml-2 !text-[30px] text-gray-500" />
        <FlagIcon className=" ml-2 !text-[30px] text-gray-500" />
      </div>
        <Button
          text="APPLY NOW"
          className="bg-darkBlue items-center mt-5 float-right py-2 border-darkBlue hover:border-blue-400 border-r border-r-white text-white !font-medium text-[20px] hover:bg-blue-400 transition-all cursor-pointer focus:outline-none"
          onClick={() => console.log()}
        />
    </div>
  );
};

export default SpecialJobDetail;
