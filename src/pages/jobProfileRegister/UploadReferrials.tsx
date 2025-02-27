import Panel from 'src/components/common/Panel';
import { LuUpload } from "react-icons/lu";

const UploadReferrials: React.FC<any> = ({ appProfileValue, bufferSetAppProfileValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      bufferSetAppProfileValue({ ...appProfileValue, selectedReferrial: file })
    }
  };

  const handleRemoveFile = () => {
    bufferSetAppProfileValue({ ...appProfileValue, selectedReferrial: null })
  };

  return (
    <div className="w-full">
      <Panel classStyle="flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-xl">
        <span className="font-bold text-[18px] sm:text-[20px] text-[#33495E]">
          Upload referrals from past employers <span className='font-normal text-[18px] sm:text-[20px]'>(Optional)</span>
        </span>

        <div className="border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative">
          <LuUpload className="w-[50px] h-[50px] text-gray-300" />
          <span className='mt-2'>{appProfileValue.selectedReferrial ? appProfileValue.selectedReferrial.name : "Upload Referrals"}</span>
          <input
            type="file"
            id="referrialFileInput"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="referrialFileInput"
            className="bg-primaryBlue text-white sm:py-4 sm:px-6 py-2 px-2 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute sm:bottom-5 sm:right-5 bottom-2 right-2"
          >
            Choose File
          </label>
        </div>

        {appProfileValue.selectedReferrial && (
          <div className="mt-2 relative flex justify-between items-center">
            <span className="text-gray-700">{appProfileValue.selectedReferrial.name}</span>
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

export default UploadReferrials;

