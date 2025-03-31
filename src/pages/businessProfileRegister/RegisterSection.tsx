import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';
import { FaCamera } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { SlPicture } from "react-icons/sl";
const RegisterSection = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);

      const uniqueFiles = fileArray.filter(file => !businessProfileValue.businessPhoto.some(img => img.name === file.name));

      if (businessProfileValue.businessPhoto.length + uniqueFiles.length > 12) {
        alert('You can upload a maximum of 12 images.');
        return;
      }

      bufferSetBusinessProfileValue({ ...businessProfileValue, businessPhoto: [...businessProfileValue.businessPhoto, ...uniqueFiles] })
    }
  };

  const handleRemoveImage = (index: number) => {
    bufferSetBusinessProfileValue({ ...businessProfileValue, businessPhoto: businessProfileValue.businessPhoto.filter((_, i) => i !== index) })
  };

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Business Name*</span>
          <TextInput
            type="email"
            name="businessName"
            label="Name"
            value={businessProfileValue.businessName}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />

          {/* <span className='font-bold my-3'>Your Name*</span>
          <TextInput
            type="email"
            name="name"
            label="Name"
            value={businessProfileValue.name}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />

          <span className='font-bold my-3'>Email*</span>
          <TextInput
            type="email"
            name="email"
            label="Add Email"
            value={businessProfileValue.email}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          /> */}
        </div>


        <label className="flex items-center space-x-5 mt-2 hidden">
          <input
            name="reciveConfirm"
            type="checkbox"
            className="w-[20px] h-[20px] form-checkbox text-blue-600"
            checked={businessProfileValue.reciveConfirm}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
          />
          <span className="font-bold text-[14px] sm:text-[18px] text-[#33495E]">
            Recieve Updated Jobs Opportunities & New Job Leads</span>
        </label>

        <div>
          <span className="font-bold text-[18px] text-[#33495E]">
            Business Photo Upload
          </span>

          <div className='border border-[#e5e7eb] w-full h-[200px] rounded-xl flex justify-center items-center flex-col relative mt-5'>
            <FaCamera className='w-[50px] h-[50px] text-gray-300' />
            <span>{businessProfileValue.businessPhoto.length > 0 ? `${businessProfileValue.businessPhoto.length} Files Selected` : "No File Chosen"}</span>
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
              className="bg-primaryBlue text-white py-2 px-2 sm:py-4 sm:px-6 text-[12px] sm:text-[15px] font-semibold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-[6px] absolute bottom-2 right-2 sm:bottom-5 sm:right-5"
            >
              Choose Files
            </label>
          </div>

          <div className="flex mt-2 space-x-5 flex-wrap">
            {businessProfileValue.businessPhoto.map((image, index) => (
              <div key={index} className="relative w-24 h-24 border border-gray-200 rounded-xl flex justify-center items-center bg-[#fafafa]">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <TiDelete
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 text-[30px] text-red-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>


      </Panel>
    </div>
  );
};

export default RegisterSection;
