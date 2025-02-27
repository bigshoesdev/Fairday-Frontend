import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getJobConstManage } from 'src/store/user/jobSlice';
import Button from 'src/components/common/Button';
import { useNavigate } from 'react-router-dom';

import RegisterSection from 'src/pages/businessProfileRegister/RegisterSection'
import CategorySelect from 'src/pages/businessProfileRegister/CategorySelect';
import OtherSection from 'src/pages/businessProfileRegister/OtherSection'
import Affiliations from 'src/pages/businessProfileRegister/Affiliations'
import NameLocation from 'src/pages/businessProfileRegister/NameLocation'
import UploadReferences from 'src/pages/businessProfileRegister/UploadReferences';
import OverallRating from 'src/pages/businessProfileRegister/OverallRating';
import VerifyRequire from 'src/pages/businessProfileRegister/VerifyRequire';
import PaymentArea from 'src/pages/businessProfileRegister/PaymentArea'
import BusinessYears from 'src/pages/businessProfileRegister/BusinessYears';
import Reports from 'src/pages/businessProfileRegister/Reports';
import WebsiteLink from 'src/pages/businessProfileRegister/WebsiteLink';
import CurrencyAccepted from 'src/pages/businessProfileRegister/CurrencyAccepted';
import BarterConfrim from 'src/pages/businessProfileRegister/BarterConfrim';
import ServiceDate from 'src/pages/businessProfileRegister/ServiceDate';
import Contact from 'src/pages/businessProfileRegister/Contact';
import BusinessInsurance from 'src/pages/businessProfileRegister/BusinessInsurance';
import { registerBusinessProfile } from 'src/store/user/businessProfileSlice';
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';
import { messageHandle } from "src/store/systemSetting/commonSlice";

const BusinessProfileRegister = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;
  const userEmail = user?.email;

  const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
  const { businessProfileDetails } = BusinessProfileConfig;
  const businessDetails = businessProfileDetails[0] || {};


  const bufferLink = BusinessProfileConfig?.bufferLink;

  useEffect(() => {
    dispatch(getJobConstManage());
    if (bufferLink) {
      const formattedBufferLink = bufferLink.startsWith('/')
        ? bufferLink
        : `/${bufferLink}`;

      navigate(formattedBufferLink);
    }
  }, [dispatch, bufferLink]);

  const {
    businessName,
    name,
    reciveConfirm,
    businessPhoto,
    selectedCategories,
    street,
    city,
    country,
    selectedLocationYears,
    otherTitle,
    serviceDescription,
    selectedBusinessYears,
    verifyRequireConfirm,
    preScreeningReports,
    affiliations,
    websiteLink,
    referProfileConfirm,
    businessInsuranceYes,
    businessInsuranceNo,
    workmansInsuranceYes,
    workmansInsuranceNo,
    insurance,
    currencyAccepted,
    barterConfirm,
    coupon,
    expirationDate,
    contactPreferences,
    selectedReference,
    instagram,
    telephone,
    facebook,
    linkedin,
    contactEmail,
    skype,
    whatsApp,
    contactOther,
    selectedPayment
  } = businessDetails



  const [businessProfileValue, setBusinessProfileValue] = useState({
    userId: userId || "",
    email: userEmail || "",
    businessName: businessName,
    name: "",
    reciveConfirm: false,
    businessPhoto: [],
    selectedCategories: [],
    street: "",
    city: "",
    country: "",
    selectedLocationYears: "",
    otherTitle: "",
    serviceDescription: "",
    selectedBusinessYears: "",
    verifyRequireConfirm: false,
    preScreeningReports: [],
    affiliations: "",
    websiteLink: "",
    referProfileConfirm: false,
    businessInsuranceYes: false,
    businessInsuranceNo: false,
    workmansInsuranceYes: false,
    workmansInsuranceNo: false,
    insurance: "",
    currencyAccepted: "",
    barterConfirm: false,
    coupon: "",
    expirationDate: "",
    contactPreferences: {},
    selectedReference: "",
    instagram: "",
    telephone: "",
    facebook: "",
    linkedin: "",
    contactEmail: "",
    skype: "",
    whatsApp: "",
    contactOther: "",
    selectedPayment: "mastercard",
  })


  const [hideEmployerConfirm, setHideEmployerConfirm] = useState(false);
  const [agreeConfirm, setAgreeConfirm] = useState(false);
  const [autoSaveContrim, setAutoSaveContrim] = useState(false);

  useEffect(() => {
    dispatch(viewBusinessProfile({ userId: userId }));
  }, [dispatch]);


  const registerButton = async () => {
    const formData: any = new FormData();

    Object.keys(businessProfileValue).forEach((key: string) => {
      if (key === 'selectedCategories') {
        businessProfileValue.selectedCategories.forEach((categoryId: string) => {
          formData.append('selectedCategories[]', categoryId);
        });
      } else if (key === 'businessPhoto') {
        businessProfileValue.businessPhoto.forEach((file) => {
          formData.append("images", file);
        });
      } else {
        formData.append(key, businessProfileValue[key]);
      }
    });

     dispatch(registerBusinessProfile(formData));

  };

  const viewProfileButton = () => {
    if (businessProfileDetails?.length > 0) {
      navigate('/business-profile');
    } else {
      dispatch(messageHandle({ type: "error", message: "Please complete your profile!" }));
    }
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='flex flex-col text-center font-bold  text-[28px] sm:text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>

        <span>Business Applicant Profile Registration </span>
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-50px] sm:mt-[-70px] w-full'>
          <div className='p-[8px] sm:p-[15px] flex flex-row bg-blue-500 items-center rounded-xl'>
            <a href="#" className='w-full flex justify-center'>
              <span className='text-[18px] sm:text-[20px] md:text-[24px] text-gray-200 content-center cursor-pointer'>REGISTRATION</span>
            </a>
            <a href="#" className='w-full flex justify-center'>
              <Button
                text="PROFILE VIEW"
                onClick={viewProfileButton}
                className='text-[18px] sm:text-[20px] md:text-[24px] rounded-xl bg-white text-blue-500 w-full hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
              />
            </a>
          </div>
        </div>

        <RegisterSection
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <NameLocation
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <CategorySelect
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <OtherSection
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <BusinessYears
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <Reports
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <Affiliations
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <VerifyRequire
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <WebsiteLink
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <BusinessInsurance
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <div className='w-full'>
          <label className="flex items-center space-x-5 ">
            <input
              name="referProfileConfirm"
              type="checkbox"
              className="w-[24px] h-[24px] form-checkbox text-blue-600"
              onChange={(e) => setBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
              checked={businessProfileValue.referProfileConfirm}
            />
            <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
              Allow Job Agents and Employers to Refer Your Business Profile
            </span>
          </label>
        </div>

        <UploadReferences
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <CurrencyAccepted
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />
        <BarterConfrim
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <ServiceDate
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <Contact
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
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
          businessProfileValue={businessProfileValue}
          bufferSetBusinessProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <span className="font-bold text-[16px] text-gray-600">
          Look To Your Email for your service business Hiring Number
        </span>


        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="REGISTER"
            onClick={() => registerButton()}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default BusinessProfileRegister;
