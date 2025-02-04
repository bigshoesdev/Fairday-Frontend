import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getJobConstManage } from 'src/store/user/jobSlice';
import Button from 'src/components/common/Button';

import RegisterSection from 'src/pages/businessProfileRegister/RegisterSection'
import OtherSection from 'src/pages/businessProfileRegister/OtherSection'
import Affiliations from 'src/pages/businessProfileRegister/Affiliations'
import NameLocation from 'src/pages/businessProfileRegister/NameLocation'
import UploadReferences from 'src/pages/businessProfileRegister/UploadReferences';
import OverallRating from 'src/pages/businessProfileRegister/OverallRating';
import VerifyRequire from 'src/pages/businessProfileRegister/VerifyRequire';
import PaymentArea from 'src/components/common/PaymentArea'
import BusinessYears from 'src/pages/businessProfileRegister/BusinessYears';
import Reports from 'src/pages/businessProfileRegister/Reports';
import WebsiteLink from 'src/pages/businessProfileRegister/WebsiteLink';
import CurrencyAccepted from 'src/pages/businessProfileRegister/CurrencyAccepted';
import BarterConfrim from 'src/pages/businessProfileRegister/BarterConfrim';
import ServiceDate from 'src/pages/businessProfileRegister/ServiceDate';
import Contact from 'src/pages/businessProfileRegister/Contact';
import BusinessInsurance from 'src/pages/businessProfileRegister/BusinessInsurance';



CurrencyAccepted
const BusinessProfileRegister = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);


  //Register Section component variables
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [name, setName] = useState('');
  const [reciveConfirm, setReciveConfirm] = useState(false);
  const [businessPhoto, setBusinessPhoto] = useState<File[]>([]);

  //Other Section component Variables
  const [otherTitle, setOtherTitle] = useState('');
  const [skillDetails, setSkillDetails] = useState('');

  //Name and Location component variables
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [affiliations, setAffiliations] = useState('');

  const [websiteLink, setWebsiteLink] = useState('');
  const [referenceFile, setReferenceFile] = useState<File>();

  const [currencyAccepted, setCurrencyAccepted] = useState('');

  const [barterConfirm, setBarterConfirm] = useState(false);
  const [referProfileConfirm, setreferProfileConfirm] = useState(false);

  const [businessInsuranceYes, setBusinessInsuranceYes] = useState(false);
  const [businessInsuranceNo, setBusinessInsuranceNo] = useState(false);
  const [workmansInsuranceYes, setWorkmansInsuranceYes] = useState(false);
  const [workmansInsuranceNo, setWorkmansInsuranceNo] = useState(false);


  const [coupon, setCoupon] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [telephone, setTelephone] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [skype, setSkype] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [contactOther, setContactOther] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const [insurance, setInsurance] = useState('');

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

        <span>Business Applicant Profile Registration </span>
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-70px] w-full'>
          <div className='p-[15px] flex flex-row bg-blue-500 items-center rounded-xl'>
            <a href="#" className='w-full flex justify-center'>
              <span className='sm:text-[20px] md:text-[24px] text-gray-200 content-center cursor-pointer'>REGISTRATION</span>
            </a>
            <a href="#" className='w-full flex justify-center'>
              <Button
                text="PROFILE VIEW"
                onClick={onClick}
                className='sm:text-[20px] md:text-[24px] rounded-xl bg-white text-blue-500 w-full hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
              />
            </a>
          </div>
        </div>

        <RegisterSection
          setBusinessPhoto={setBusinessPhoto}
          businessPhoto={businessPhoto}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          businessName={businessName}
          setBusinessName={setBusinessName}
          reciveConfirm={reciveConfirm}
          setReciveConfirm={setReciveConfirm}
        />

        <NameLocation
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />

        <OtherSection
          otherTitle={otherTitle}
          setOtherTitle={setOtherTitle}
          skillDetails={skillDetails}
          setSkillDetails={setSkillDetails}
        />

        <BusinessYears />

        <Reports
          checkboxStates={checkboxStates}
          setCheckboxStates={setCheckboxStates}
          link={link}
          setLink={setLink}
        />

        <Affiliations
          affiliations={affiliations}
          setAffiliations={setAffiliations}
        />

        <VerifyRequire />

        <WebsiteLink
          websiteLink={websiteLink}
          setWebsiteLink={setWebsiteLink}
        />

        <BusinessInsurance
          businessInsuranceYes={businessInsuranceYes}
          setBusinessInsuranceYes={setBusinessInsuranceYes}
          businessInsuranceNo={businessInsuranceNo}
          setBusinessInsuranceNo={setBusinessInsuranceNo}
          workmansInsuranceYes={workmansInsuranceYes}
          setWorkmansInsuranceYes={setWorkmansInsuranceYes}
          workmansInsuranceNo={workmansInsuranceNo}
          setWorkmansInsuranceNo={setWorkmansInsuranceNo}
          insurance={insurance}
          setInsurance={setInsurance}
        />

        <div className='w-full'>
          <label className="flex items-center space-x-5 ">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] form-checkbox text-blue-600"
              checked={referProfileConfirm}
              onChange={() => setreferProfileConfirm((prev) => !prev)}
            />
            <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
              Allow Job Agents and Employers to Refer Your Business Profile
            </span>
          </label>
        </div>

        <UploadReferences
          referenceFile={referenceFile}
          setReferenceFile={setReferenceFile}
        />

        <CurrencyAccepted
          currencyAccepted={currencyAccepted}
          setCurrencyAccepted={setCurrencyAccepted}
        />
        <BarterConfrim
          barterConfirm={barterConfirm}
          setBarterConfirm={setBarterConfirm}
        />

        <ServiceDate
          coupon={coupon}
          setCoupon={setCoupon}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
        />

        <Contact
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          telephone={telephone}
          setTelephone={setTelephone}
          facebook={facebook}
          setFacebook={setFacebook}
          instagram={instagram}
          setInstagram={setInstagram}
          linkedin={linkedin}
          setLinkedIn={setLinkedIn}
          skype={skype}
          setSkype={setSkype}
          whatsApp={whatsApp}
          setWhatsApp={setWhatsApp}
          contactOther={contactOther}
          setContactOther={setContactOther}
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
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

        <span className="font-bold text-[16px] text-gray-600">
          Look To Your Email for your service business Hiring Number
        </span>


        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="REGISTER"
            onClick={() => buttonClick()}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default BusinessProfileRegister;
