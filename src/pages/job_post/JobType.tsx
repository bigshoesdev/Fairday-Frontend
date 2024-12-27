import React, { useState } from 'react';
import DropPanel from 'src/components/common/DropPanel';
import Button from 'src/components/common/Button';


const JobType = () => {

  const [emailConfirm, setEmailConfirm] = useState(false);
  const handleEmailConfirmChange = () => {
    setEmailConfirm((prev) => {
      const newState = !prev;
      return newState;
    });
  };


  const buttonClick = () => {
    console.log('This is button clicked!!');

  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Job Type* <span className='text-black font-normal'>(Select as applicable - one required)</span></span>
            <span className='text-black text-[22px]'>One Time Service or Per Service</span>

          </div>
        }
      >
        <div>
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
              checked={emailConfirm}
              onChange={handleEmailConfirmChange}
            />
            <span className="text-[20px] text-[#4A4A4A]">
              Email Confirmation Required for posting all jobs</span>
          </label>
        </div>






      </DropPanel>
    </div>
  );
};

export default JobType;
