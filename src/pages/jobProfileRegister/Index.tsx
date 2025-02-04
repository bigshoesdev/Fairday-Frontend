import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getJobConstManage } from 'src/store/user/jobSlice';
import Button from 'src/components/common/Button';

import RegisterSection from 'src/pages/jobProfileRegister/RegisterSection'
import OtherSection from 'src/pages/jobProfileRegister/OtherSection'
import CertificationsSection from 'src/pages/jobProfileRegister/CertificationsSection'
import NameLocation from 'src/pages/jobProfileRegister/NameLocation'
import PicIdImage from 'src/pages/jobProfileRegister/PicIdImage';
import UploadResume from 'src/pages/jobProfileRegister/UploadResume';
import UploadReferrials from 'src/pages/jobProfileRegister/UploadReferrials';
import OverallRating from 'src/pages/jobProfileRegister/OverallRating';
import VerifyRequire from 'src/pages/jobProfileRegister/VerifyRequire';
import PaymentArea from 'src/components/common/PaymentArea'
import ExperienceLevel from 'src/pages/jobProfileRegister/ExperienceLevel';
import EducationDetail from 'src/pages/jobProfileRegister/EducationDetail';
import WorkHistofyDetail from 'src/pages/jobProfileRegister/WorkHistofyDetail';
import ReportsLinks from 'src/pages/jobProfileRegister/ReportsLinks';

const JobProfileRegister = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);


  //Register Section component variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [reciveConfirm, setReciveConfirm] = useState(false);

  //Other Section component Variables
  const [otherTitle, setOtherTitle] = useState('');
  const [skillDetails, setSkillDetails] = useState('');

  //Certification Section component Variables
  const [certificate, setCertificate] = useState('');
  const [training, setTraining] = useState('');
  const [license, setLicense] = useState('');

  //Name and Location component variables
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  //ID Images Component
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const [referralFile, setReferralFile] = useState<File>();

  const [hideEmployerConfirm, setHideEmployerConfirm] = useState(false);
  const [agreeConfirm, setAgreeConfirm] = useState(false);
  const [autoSaveContrim, setAutoSaveContrim] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState('mastercard');

  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});
  const [link, setLink] = useState('');


  //button click event
  const buttonClick = () => {
  
  };

  const onClick = () => {

  }

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='flex flex-col text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>

        <span>Job Applicant Profile Registration </span>
        <span className='text-[20px] mt-5'>Apply, Interview & Get Hired in a few clicks!</span>
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-70px] w-full'>
          <div className='p-[15px] flex flex-row bg-blue-500 items-center rounded-xl'>
            <a href="#" className='w-full flex justify-center'>
              <span className='sm:text-[20px] md:text-[24px] text-gray-200 content-center cursor-pointer'>PROFILE REGISTRATION</span>
            </a>
            <a href="#" className='w-full flex justify-center'>
              <Button
                text="VIEW PROFILE"
                onClick={onClick}
                className='sm:text-[20px] md:text-[24px] rounded-xl bg-white text-blue-500 w-full hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
              />
            </a>
          </div>
        </div>

        <RegisterSection
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          email={email}
          setEmail={setEmail}
          setLastName={setLastName}
          reciveConfirm={reciveConfirm}
          setReciveConfirm={setReciveConfirm}
        />

        <OtherSection
          otherTitle={otherTitle}
          setOtherTitle={setOtherTitle}
          skillDetails={skillDetails}
          setSkillDetails={setSkillDetails}

        />

        <ExperienceLevel />

        <CertificationsSection
          certificate={certificate}
          setCertificate={setCertificate}
          setTraining={setTraining}
          training={training}
          license={license}
          setLicense={setLicense}
        />

        <PicIdImage
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />

        <NameLocation
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />

        <UploadResume
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />

        <EducationDetail />
        <WorkHistofyDetail />

        <UploadReferrials
          setReferralFile={setReferralFile}
          referralFile={referralFile}
        />

        <VerifyRequire />

        <ReportsLinks
          checkboxStates={checkboxStates}
          setCheckboxStates={setCheckboxStates}
          link={link}
          setLink={setLink}
        />

        <OverallRating
          hideEmployerConfirm={hideEmployerConfirm}
          setHideEmployerConfirm={setHideEmployerConfirm}
          agreeConfirm={agreeConfirm}
          setAgreeConfirm={setAgreeConfirm}
          setAutoSaveContrim={setAutoSaveContrim}
          autoSaveContrim={autoSaveContrim}
        />

        <PaymentArea
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />

        <label className="flex items-center space-x-5 ">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] form-checkbox text-blue-600"
          // checked={autoSaveContrim}
          // onChange={() => setAutoSaveContrim((prev) => !prev)}
          />
          <span className="font-bold text-[16px] text-gray-600">
            Look To Your Email for Confirmation
          </span>
        </label>

        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="REGISTER PROFILE"
            onClick={() => buttonClick()}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <div className='text-[15px] text-black font-bold px-60 flex justify-center justify-between mt-5'>
            <span>Site Security / Privacy</span>
            <span>Verified</span>
            <span>Copyright</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobProfileRegister;
