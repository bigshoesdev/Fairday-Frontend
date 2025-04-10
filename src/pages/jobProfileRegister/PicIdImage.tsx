import Panel from 'src/components/common/Panel';
import { FaCamera } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { SlPicture } from "react-icons/sl";

const PicIdImage: React.FC<any> = ({ appProfileValue, bufferSetAppProfileValue }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // const maxSizeMB = 2;

    // if (!file) return;

    // if (event.target.files?.length > 1) {
    //   alert("Please upload only one file.");
    //   return;
    // }

    // const fileSizeMB = file.size / (1024 * 1024);
    // if (fileSizeMB > maxSizeMB) {
    //   alert(`File is too large. Maximum size allowed is ${maxSizeMB}MB.`);
    //   return;
    // }

    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   const base64String = reader.result as string;
    //   bufferSetAppProfileValue({ 
    //     ...appProfileValue, 
    //     selectedIdPic: base64String 
    //   });
    // };
    // reader.readAsDataURL(file);
    if (file) {
      // Check if the file is a valid image and its size is within the 2MB limit
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }

      if (file.size > 2 * 1024 * 1024) { // 2MB in bytes
        alert('The file is too large. Please upload an image smaller than 2MB.');
        return;
      }

      // If all validations pass, update the logoImage
      bufferSetAppProfileValue({ ...appProfileValue, selectedIdPic: file });
    }
  };

  const handleRemoveFile = () => {
    bufferSetAppProfileValue({ ...appProfileValue, selectedIdPic: null });
  };

  // const avatar = appProfileValue.selectedIdPic;
  // const avatarPath = appProfileValue.selectedIdPic.slice(1);

  const avatar = appProfileValue.selectedIdPic;
  const avatarPath = typeof avatar === 'string' ? avatar.slice(1) : null;

  console.log('avatar', avatar);
  console.log('avatarPath', avatarPath);




  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 pt-0 bg-white rounded-2xl gap-5 shadow'}>
        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
          Upload Avatar
          <p className="text-sm font-normal">File size is limited to 2MB</p>
        </span>

        <div className='border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative'>
          <FaCamera className='w-[50px] h-[50px] text-gray-300' />
          <span>
            {appProfileValue.selectedIdPic ? "File Selected" : "No File Chosen"}
          </span>
          <input
            type="file"
            id="singleFileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="singleFileInput"
            className="bg-primaryBlue text-white sm:py-4 sm:px-6  py-2 px-2 text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute sm:bottom-5 sm:right-5 bottom-2 right-2"
          >
            Choose File
          </label>
        </div>

        <div className="flex mt-2">
          <div className="w-24 h-24 border border-gray-200 rounded-xl flex justify-center items-center bg-[#fafafa] relative overflow-hidden">
            {avatar ? (
              <>
                {/* <img
                  src={
                    `http://localhost:8000${appProfileValue.selectedIdPic.slice(1) || ""}`
                  }
                  alt="Preview"
                  className="w-full h-full object-cover rounded-md"
                /> */}
                <img
                  src={
                    typeof avatar === 'string'
                      ? `http://localhost:8000${avatarPath || ""}`
                      : URL.createObjectURL(avatar)
                  }
                  alt="Preview"
                  className="w-full h-full object-cover rounded-md"
                />

                <TiDelete
                  onClick={handleRemoveFile}
                  className="absolute top-0 right-0 text-[30px] text-red-500 cursor-pointer"
                />
              </>
            ) :
              (
                <div className="text-gray-500 text-3xl"><SlPicture /></div>
              )}

          </div>
        </div>
      </Panel>
    </div>
  );
};

export default PicIdImage;
