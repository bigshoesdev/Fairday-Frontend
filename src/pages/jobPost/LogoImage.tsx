import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import { FaCamera } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";

interface LogoImageProps {
  selectedLogo: File | null;
  setSelectedLogo: (file: File | null) => void;
}

const LogoImage: React.FC<LogoImageProps> = ({ selectedLogo, setSelectedLogo }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedLogo(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedLogo(null);
  };

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className="font-bold text-[26px] text-[#33495E]">
          Upload 1 image for Job Description (Optional)
        </span>
        <div className='border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative'>
          <FaCamera className='w-[50px] h-[50px] text-gray-300' />
          <span>{selectedLogo ? selectedLogo.name : "No File Chosen"}</span>
          <input
            type="file"
            id="singleFileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="singleFileInput"
            className="bg-primaryBlue text-white py-4 px-6 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-5 right-5"
          >
            Choose File
          </label>
        </div>

        <div className="flex mt-2">
          <div className="w-24 h-24 border border-gray-200 rounded-xl flex justify-center items-center bg-[#fafafa] relative">
            {selectedLogo ? (
              <>
                <img
                  src={URL.createObjectURL(selectedLogo)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  onClick={handleRemoveFile}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs"
                >
                  ✕
                </button>
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
