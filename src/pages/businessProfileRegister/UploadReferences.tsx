// import Panel from 'src/components/common/Panel';
// import { LuUpload } from "react-icons/lu";

// const UploadReferences = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       bufferSetBusinessProfileValue({ ...businessProfileValue, selectedReferrial: file })
//     }
//     console.log('file', file);
    
//   };

//   const handleRemoveFile = () => {
//     bufferSetBusinessProfileValue({ ...businessProfileValue, selectedReferrial: null })
//   };

//   return (
//     <div className="w-full">
//       <Panel classStyle="flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-xl">
//         <span className="font-bold text-[18px] text-[#33495E]">
//           Upload References / Client testimonials <span className='font-normal text-[20px'>(Optional)</span>
//         </span>

//         <div className="border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative">
//           <LuUpload className="w-[50px] h-[50px] text-gray-300" />
//           <span className='mt-2'>{businessProfileValue.referenceFile ? businessProfileValue. referenceFile.name : "Upload References"}</span>
//           <input
//             type="file"
//             id="singleFileInput"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//           <label
//             htmlFor="singleFileInput"
//             className="bg-primaryBlue text-white py-4 px-6 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-5 right-5"
//           >
//             Choose File
//           </label>
//         </div>

//         {businessProfileValue.referenceFile && (
//           <div className="mt-2 relative flex justify-between items-center">
//             <span className="text-gray-700">{businessProfileValue.referenceFile.name}</span>
//             <button
//               onClick={handleRemoveFile}
//               className="bg-red-500 text-white px-2 py-1 rounded text-xs"
//             >
//               Remove
//             </button>
//           </div>
//         )}
//       </Panel>
//     </div>
//   );
// };

// export default UploadReferences;
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
        <span className="font-bold text-[26px] text-[#33495E]">
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
            className="bg-primaryBlue text-white py-4 px-6 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-5 right-5"
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

