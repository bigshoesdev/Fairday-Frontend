import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getJobConstManage } from 'src/store/user/jobSlice';
import UploadImage from 'src/pages/profileRegister/UploadImage';
import NameLocation from 'src/pages/profileRegister/NameLocation';
import BusinessPlan from 'src/pages/profileRegister/BusinessPlan';
import StartDate from 'src/pages/profileRegister/StartDate';
import RegisterDetail from 'src/pages/profileRegister/RegisterDetail';
import SelectType from 'src/pages/profileRegister/SelectType';

import Button from 'src/components/common/Button';

const ProfileRegister = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);

  const navigate = useNavigate()
  const { advertisementConfig } = useSelector((state: any) => state);
  const AdvertiseDetailsInfos = advertisementConfig.advertiseDetails;

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  //Name and Location component variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  //Register Detail Componenet
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [otpConfirm, setOptConfirm] = useState(false);



  //button click event
  const buttonClick = (status: number) => {
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[60px] text-white bg-[#526876] h-[355px] w-full pt-[20px] flex flex-col'>
        <span>REGISTER</span>
        <span className='text-[25px] font-semibold'>With FAIRDAY</span>
        <span className='text-[25px] font-semibold'>For Better Employment, Jobs, Sales and Trade</span>
        <div className='mt-10 flex gap-10 text-[20px] justify-center font-normal'>
          <span>COMMERICAL EMPLOYER</span>
          <span>HOME OR FARM HIRING</span>
          <span>PERSONAL HIRING</span>
          <span>A BUSINESS OFFERING SERVICES</span>
        </div>
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[750px] gap-y-10'>
        <div className='mt-[-50px] w-full'>
          <SelectType />
        </div>

        <RegisterDetail
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          emailConfirm={emailConfirm}
          setEmailConfirm={setEmailConfirm}
          otpConfirm={otpConfirm}
          setOptConfirm={setOptConfirm}
          language={language}
          setLanguage={setLanguage}
        />

        <StartDate />

        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <NameLocation
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
          businessName={businessName}
          setBusinessName={setBusinessName}
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />

        <div className='flex items-center bg-white px-8 py-10 w-full rounded-xl shadow-lg flex-row'>
          <input
            type="checkbox"
            className="w-[25px] h-[25px] form-checkbox text-blue-600"
          />
          <span className='font-bold text-[24px] ml-5'>Get Identification Verified</span>
          <span className='ml-2'>(Optional)</span>
        </div>

        <BusinessPlan />

        <div className='flex flex-col text-center text-[19px]'>
          <span>Click Register Below! Look to your Email for Membership Registration,</span>
          <span>email verification and password setting</span>
          <div className='flex justify-center mt-5'>
            <input
              type="checkbox"
              className="w-[25px] h-[25px] form-checkbox text-blue-600"
            />
            <span className='ml-5'>Stay logged in with <span className='text-blue-500'>FAIRDAY</span> shortcut upon registration</span>
          </div>
          <span className='mt-8'>Welcome <span className='text-blue-500'>FAIRDAY Special Member</span> !</span>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="REGISTER"
            onClick={() => buttonClick(1)}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
        </div>

        <span className='text-[19px]'>By hitting the  <span className='text-blue-500'>'Register'</span> button, you agree to the <span className='text-blue-500'>Terms conditions</span></span>
      </div>
    </div>
  );
};

export default ProfileRegister;
