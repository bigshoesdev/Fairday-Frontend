import Button from 'src/components/common/Button';
import { FaRegCheckCircle } from "react-icons/fa";
import DropPanel from 'src/components/common/DropPanel';


const AdverConfirmation = () => {

  //button click event
  const buttonClick = () => {
    console.log('data');
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Advertisement Confirmation
      </div>

      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>

        <div className='xs:mt-[-100px] w-full '>
          <div className='flex justify-center items-center bg-white flex-col py-10 rounded-xl gap-3 shadow-lg'>
            <FaRegCheckCircle className='text-[60px] text-blue-600' />
            <span className='font-bold text-blue-600 text-[20px]'>Welcome Business XYZ</span>
            <div className='flex flex-col items-center'>
              <span className='font-bold text-black text-[40px]'>Thank you for Advertising</span>
              <span className='font-bold text-black text-[40px]'> with FAIRDAY</span>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <DropPanel
            header={
              <div className='flex flex-col gap-2'>
                <span className='text-[#1880F1] text-[22px] font-bold'>Publish and Manage Your Advertisement</span>
              </div>
            }
          >
            <div className='flex flex-col gap-4 p-6'>
              <Button
                text="VIEW & PUBLISH YOUR ADVERTISEMENT"
                onClick={buttonClick}
                className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
              />
              <Button
                text="EDIT YOUR ADVERTISEMENT"
                onClick={buttonClick}
                className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
              />
              <Button
                text="ENHANCE ADVERTISEMENT DISTRIBUTION"
                onClick={buttonClick}
                className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
              />
              <Button
                text="END ADVERTISEMENT"
                onClick={buttonClick}
                className="bg-tealGray text-white py-6 text-[20px] font-bold hover:bg-gray-500 transition-all cursor-pointer hover:border-gray-500 focus:outline-none rounded-xl"
              />
            </div>
          </DropPanel>
        </div>

      </div>
    </div>
  );
};

export default AdverConfirmation;
