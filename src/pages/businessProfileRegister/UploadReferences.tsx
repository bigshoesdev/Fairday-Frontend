import Panel from 'src/components/common/Panel';
import { LuUpload } from "react-icons/lu";

const UploadReferences: React.FC<any> = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      bufferSetBusinessProfileValue({ ...businessProfileValue, selectedReference: file })
    }
  };

  const handleRemoveFile = () => {
    bufferSetBusinessProfileValue({ ...businessProfileValue, selectedReference: null })
  };

  return (
    <div className="w-full">
      <Panel classStyle="flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-xl">
        <span className="font-bold text-[18px] sm:text-[26px] text-[#33495E]">
          Upload References / Client testimonials <span className='font-normal text-[20px'>(Optional)</span>
        </span>

        <div className="border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative">
          <LuUpload className="w-[50px] h-[50px] text-gray-300" />
          <span className='mt-2'>{businessProfileValue.selectedReference ? businessProfileValue.selectedReference.name : "Upload References"}</span>
          <input
            type="file"
            id="referrialFileInput"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="referrialFileInput"
            className="bg-primaryBlue text-white sm:py-4 sm:px-6 py-2 px-2 text-[13px] sm:text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-2 right-2 sm:bottom-5 sm:right-5"
          >
            Choose File
          </label>
        </div>

        {businessProfileValue.selectedReference && (
          <div className="mt-2 relative flex justify-between items-center">
            <span className="text-gray-700">{businessProfileValue.selectedReference.name}</span>
            <button
              onClick={handleRemoveFile}
              className="bg-red-500 text-white px-2 py-1 rounded text-xs"
            >
              Remove
            </button>
          </div>
        )}
      </Panel>
    </div>
  );
};

export default UploadReferences;

