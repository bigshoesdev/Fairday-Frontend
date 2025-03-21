import React from 'react';
import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import Button from 'src/components/common/Button';
import TextInput from 'src/components/common/TextInput';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

interface LoginProps {
  closeModal: () => void;
}

const ApplyTap: React.FC<LoginProps> = ({ closeModal }) => {

  const [name, setName] = useState('');

  const [employerConfirm, setEmployerConfirm] = useState(false);



  const buttonClick = () => {

  };

  return (
    <div>
      <Panel classStyle={'flex flex-col py-9 gap-y-7 justify-center items-center'}>
        <div className='flex flex-col px-16'>
          <span className='text-primaryBlue text-[21px] font-bold'>FAIRDAY JOBS</span>
          <span className='text-black font-semibold text-[16px] mt-4'>Job Title: Aiplaine Machenic</span>
          <span className='text-primaryBlue text-[16px] mt-1'>AiglobalmechCJL# 12345Fairday</span>
          <span className='text-black text-[16px] mt-3 font-bold'>Optional Public Contact:</span>

          <div className="relative mt-3">
            <div className="absolute inset-y-0 start-0 px-4 flex items-center ps-3 pointer-events-none ">
              <IoIosMail className='text-gray-500 text-[20px]'/>
              <span className='ml-3 font-bold text-black'>Email :</span>
            </div>
            <input type="search" id="search" className=" block outline-none w-full bg-transparent p-4 ps-24 text-sm text-gray-800  rounded-lg !bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>

          <div className="relative mt-3">
            <div className="absolute inset-y-0 start-0 px-4 flex items-center ps-3 pointer-events-none ">
              <FaPhoneAlt className='text-gray-500'/>
              <span className='ml-4 font-bold text-black'>Phone Number :</span>
            </div>
            <input type="search" id="search" className=" block outline-none w-full bg-transparent p-4 ps-44 text-sm text-gray-800  rounded-lg !bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>


          <label className="flex items-center space-x-3 mt-3">
            <input
              type="checkbox"
              className="w-[25px] h-[25px] form-checkbox text-blue-600"
              checked={employerConfirm}
              onChange={() => setEmployerConfirm((prev) => !prev)}
            />
            <span className="font-bold text-[15px] text-[#33495E]">
              Employer Prefers Registered FAIRDAY Applicants</span>
          </label>
        </div>
        <hr className='w-full mt-[-15px]'></hr>
        <div className='w-full flex flex-col py-1 px-16'>
          <Button
            text="Auto Apply Now"
            onClick={buttonClick}
            className="w-full mt-[-10px] bg-primaryBlue text-white py-2 text-[20px] hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-bold"
          />
          <span className='text-[25px] font-bold mt-3'>Login</span>
          <span className='mt-3'>Username</span>
          <TextInput
            type="email"
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style="w-full mt-1"
          />

          <label className="flex items-center space-x-3 mt-4">
            <input
              type="checkbox"
              className="w-[25px] h-[25px] form-checkbox text-blue-600"
              checked={employerConfirm}
              onChange={() => setEmployerConfirm((prev) => !prev)}
            />
            <span className="font-bold text-[15px] text-[#33495E]">Recive Confirmation Email</span>
          </label>
          <span className='text-center mt-6 font-bold text-black text-[28px]'>Get Hired</span>

          <Button
            text="New Applicant Registration"
            onClick={buttonClick}
            className="w-full mt-3 bg-primaryBlue text-white py-1 text-[20px] hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-bold"
          />

          <hr className='w-full mt-5'></hr>
          <span className='mt-4'>This section for Staffing & Referral use only</span>

          <label className="flex items-center space-x-3 mt-3">
            <input
              type="checkbox"
              className="w-[25px] h-[25px] form-checkbox text-blue-600"
              checked={employerConfirm}
              onChange={() => setEmployerConfirm((prev) => !prev)}
            />
            <span className="font-bold text-[15px] text-[#33495E]">Applicant Refferal</span>
          </label>

          <span className='text-primaryBlue ml-10'>www.referralink.com/application_reference</span>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="w-[25px] h-[25px] form-checkbox text-blue-600"
              checked={employerConfirm}
              onChange={() => setEmployerConfirm((prev) => !prev)}
            />
            <span className="font-bold text-[15px] text-[#33495E]">Staffing Agent Service Fees included</span>
          </label>


        </div>
      </Panel>
    </div>
  );
};

export default ApplyTap;
