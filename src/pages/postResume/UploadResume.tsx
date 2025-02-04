import Panel from 'src/components/common/Panel';
import { LuUpload } from "react-icons/lu";

interface UploadResumeProps {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const UploadResume: React.FC<UploadResumeProps> = ({ selectedFile, setSelectedFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]); // Replace the current file with the new one
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null); // Clear the file
  };

  return (
    <div className="w-full">
      <Panel classStyle="flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-xl">
        <span className="font-bold text-[26px] text-[#33495E]">
          Upload Resume
        </span>

        <div className="border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative">
          <LuUpload className="w-[50px] h-[50px] text-gray-300" />
          <span className='mt-2'>{selectedFile ? selectedFile.name : "Upload Resume"}</span>
          <input
            type="file"
            id="singleFileInput"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="singleFileInput"
            className="bg-primaryBlue text-white py-2 px-2 sm:py-4 sm:px-6 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-5 right-5"
          >
            Choose File
          </label>
        </div>

        {selectedFile && (
          <div className="mt-2 relative flex justify-between items-center">
            <span className="text-gray-700">{selectedFile.name}</span>
            <button
              onClick={handleRemoveFile}
              className="bg-red-500 text-white px-2 py-1 rounded text-xs"
            >
              Remove
            </button>
          </div>
        )}

        <label className="flex items-center space-x-5 ">
          <input
            type="checkbox"
            className="w-[24px] h-[24px] form-checkbox text-blue-600"
            // checked={autoSaveContrim}
            // onChange={() => setAutoSaveContrim((prev) => !prev)}
          />
          <span className="font-bold text-[16px] text-gray-600">
            Post Resume to Employer Review Listings <span className='ml-6 font-bold text-black'>$5</span>
          </span>
        </label>

        <label className="flex items-center space-x-5 ">
          <input
            type="checkbox"
            className="w-[24px] h-[24px] form-checkbox text-blue-600"
            // checked={autoSaveContrim}
            // onChange={() => setAutoSaveContrim((prev) => !prev)}
          />
          <span className="font-bold text-[16px] text-gray-600">
            Allow Employment & Staffing Agents to Refer Your Profile <span className='ml-6'>(no fee)</span>
          </span>
        </label>
      </Panel>
    </div>
  );
};

export default UploadResume;
