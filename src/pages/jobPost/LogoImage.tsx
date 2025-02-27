import Panel from 'src/components/common/Panel';
import { FaCamera } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { SlPicture } from "react-icons/sl";

const LogoImage: React.FC<any> = ({ jobValue, bufferSetJobValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      bufferSetJobValue({ ...jobValue, selectedLogo: file })
    }
  };

  const handleRemoveFile = () => {
    bufferSetJobValue({ ...jobValue, selectedLogo: null })
  };

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
          Upload Employer Logo or Job Location Photo (Optional)
        </span>
        <div className='border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative'>
          <FaCamera className='w-[50px] h-[50px] text-gray-300' />
          <span>{jobValue.selectedLogo ? jobValue.selectedLogo.name : "No File Chosen"}</span>
          <input
            type="file"
            id="singleFileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="singleFileInput"
            className="bg-primaryBlue text-white sm:py-4 sm:px-6 p-2 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-2 right-2 sm:bottom-5 sm:right-5 "
          >
            Choose File
          </label>
        </div>

        <div className="flex mt-2">
          <div className="w-24 h-24 border border-gray-200 rounded-xl flex justify-center items-center bg-[#fafafa] relative">
            {jobValue.selectedLogo ? (
              <>
                <img
                  src={URL.createObjectURL(jobValue.selectedLogo)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-md"
                />
                <TiDelete
                  onClick={() => handleRemoveFile()}
                  className="absolute top-0 right-0 text-[30px] text-red-500"
                >
                </TiDelete >
              </>
            ) : (
              <div className="text-gray-500 text-3xl"><SlPicture /></div>
            )}
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default LogoImage;
