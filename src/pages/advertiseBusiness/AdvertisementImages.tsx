// import Panel from 'src/components/common/Panel';
// import { FaCamera } from "react-icons/fa";

// interface AdvertiseImagesProps {
//   selectedImages: File[];
//   setSelectedImages: React.Dispatch<React.SetStateAction<File[]>>;
// }

// const AdvertisementImages: React.FC<AdvertiseImagesProps> = ({ selectedImages, setSelectedImages }) => {

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files) {
//       const fileArray = Array.from(files);

//       // Prevent duplicates
//       const uniqueFiles = fileArray.filter(file => !selectedImages.some(img => img.name === file.name));

//       if (selectedImages.length + uniqueFiles.length > 3) {
//         alert('You can upload a maximum of 12 images.');
//         return;
//       }

//       setSelectedImages([...selectedImages, ...uniqueFiles]); // Append new images
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     setSelectedImages(selectedImages.filter((_, i) => i !== index));
//   };

//   return (
//     <div className='w-full'>
//       <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
//         <span className="font-bold text-[26px] text-[#33495E]">
//           Upload Advertisement
//         </span>

//         <div className='border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative'>
//           <FaCamera className='w-[50px] h-[50px] text-gray-300' />
//           <span>{selectedImages.length > 0 ? `${selectedImages.length} Files Selected` : "No File Chosen"}</span>
//           <input
//             type="file"
//             id="multipleFileInput"
//             multiple
//             accept="image/*"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//           <label
//             htmlFor="multipleFileInput"
//             className="bg-primaryBlue text-white py-4 px-6 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-5 right-5"
//           >
//             Choose Files
//           </label>
//         </div>

//         <div className="flex mt-2 space-x-5 flex-wrap">
//           {selectedImages.map((image, index) => (
//             <div key={index} className="relative w-24 h-24 border border-gray-200 rounded-xl flex justify-center items-center bg-[#fafafa]">
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt={`Preview ${index}`}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               <button
//                 onClick={() => handleRemoveImage(index)}
//                 className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs"
//               >
//                 ✕
//               </button>
//             </div>
//           ))}
//         </div>
//       </Panel>
//     </div>
//   );
// };

// export default AdvertisementImages;
import Panel from 'src/components/common/Panel';
import { FaCamera } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const AdvertisementImages: React.FC<any> = ({ advertiseValue, bufferSetAdvertiseValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);

      const uniqueFiles = fileArray.filter(file => !advertiseValue.selectedImages.some(img => img.name === file.name));

      if (advertiseValue.selectedImages.length + uniqueFiles.length > 12) {
        alert('You can upload a maximum of 12 images.');
        return;
      }

      bufferSetAdvertiseValue({...advertiseValue, selectedImages: [...advertiseValue.selectedImages, ...uniqueFiles] })
    }
  };

  const handleRemoveImage = (index: number) => {
    bufferSetAdvertiseValue({...advertiseValue, selectedImages: advertiseValue.selectedImages.filter((_, i) => i !== index) })
  };

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
          Upload Advertisement
        </span>

        <div className='border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative'>
          <FaCamera className='w-[50px] h-[50px] text-gray-300' />
          <span>{advertiseValue.selectedImages.length > 0 ? `${advertiseValue.selectedImages.length} Files Selected` : "No File Chosen"}</span>
          <input
            type="file"
            id="multipleFileInput"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="multipleFileInput"
            className="bg-primaryBlue text-white sm:py-4 sm:px-6 p-2 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute sm:bottom-5 sm:right-5 bottom-2 right-2"
          >
            Choose Files
          </label>
        </div>

        <div className="flex mt-2 space-x-5 flex-wrap">
          {advertiseValue.selectedImages.map((image, index) => (
            <div key={index} className="relative w-24 h-24 border border-gray-200 rounded-xl flex justify-center items-center bg-[#fafafa]">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="w-full h-full object-cover rounded-md"
              />
              <TiDelete 
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 text-[30px] text-red-500"
              >
              </TiDelete >
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
};

export default AdvertisementImages;