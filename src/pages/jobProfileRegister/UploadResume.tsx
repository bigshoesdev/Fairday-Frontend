import { useState } from 'react'
import Panel from 'src/components/common/Panel';
import { LuUpload } from "react-icons/lu";

const UploadResume: React.FC<any> = ({ appProfileValue, bufferSetAppProfileValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      bufferSetAppProfileValue({ ...appProfileValue, selectedResume: file })
    }
  };

  const handleRemoveFile = () => {
    bufferSetAppProfileValue({ ...appProfileValue, selectedResume: null })
  };

  return (
    <div className="w-full">
      <Panel classStyle="flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-xl">
        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
          Upload Resume <span className='font-normal text-[20px'>(Optional)</span>
        </span>

        <div className="border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative">
          <LuUpload className="w-[50px] h-[50px] text-gray-300" />
          <span className='mt-2'>{appProfileValue.selectedResume ? appProfileValue.selectedResume.name : "Upload Resume"}</span>
          <input
            type="file"
            id="resumeFileInput"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="resumeFileInput"
            className="bg-primaryBlue text-white sm:py-4 sm:px-6 py-2 px-2 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute sm:bottom-5 sm:right-5 bottom-2 right-2"
          >
            Choose File
          </label>
        </div>

        {appProfileValue?.selectedResume && (
          <div className="mt-2 relative flex justify-between items-center">
            <span className="text-gray-700">{appProfileValue?.selectedResume?.name}</span>
            <button
              onClick={handleRemoveFile}
              className="bg-red-500 text-white px-2 py-1 rounded text-xs"
            >
              Remove
            </button>
          </div>
        )}

        {/* <label className="flex items-center space-x-5 ">
          <input
            name="resumeReviewConfirm"
            type="checkbox"
            className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] form-checkbox text-blue-600"
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: !appProfileValue[e.target.name] })}
          />
          <span className="font-bold text-[16px] text-gray-600">
            Post Resume to Employer Review Listings <span className='ml-6 font-bold text-black'>$5</span>
          </span>
        </label>

        <label className="flex items-center space-x-5 ">
          <input
            name="referProfileConfirm"
            type="checkbox"
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: !appProfileValue[e.target.name] })}
            className="w-[24px] h-[24px] form-checkbox text-blue-600"
          />
          <span className="font-bold text-[16px] text-gray-600">
            Allow Employment & Staffing Agents to Refer Your Profile <span className='ml-6'>(no fee)</span>
          </span>
        </label> */}
      </Panel>
    </div>
  );
};

export default UploadResume;

