import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getJobConstManage } from 'src/store/user/jobSlice';
import { useNavigate } from 'react-router-dom';

import { registerBusinessProfile } from 'src/store/user/businessProfileSlice';
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';
import { messageHandle } from "src/store/systemSetting/commonSlice";

import BusinessProfileEditing from 'src/pages/businessProfileRegister/Editing';
import BusinessProfile from 'src/pages/businessProfile'
import BusinessDetail from 'src/pages/businessProfile/BusinessDetail'

const BusinessProfileRegister = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;
  const userEmail = user?.email;

  const [tabSelect, setTabSelect] = useState(true);

  const bufferSetTabSelect = (bool) => {
    setTabSelect(bool)
  }


  const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
  const { businessProfileDetails } = BusinessProfileConfig;

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

  const [businessProfileValue, setBusinessProfileValue] = useState({
    userId: userId || "",
    email: userEmail || "",
    businessName: '',
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
    selectedIdPic: '',
    firstName: '',
    lastName: '',
    skillDetails: '',
    businessInsurance: 'yes',
    workmansInsurance: 'yes',
  })


  console.log('contact', businessProfileValue.telephone);
  

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
            <div
              className='w-full flex justify-center'
              onClick={() => bufferSetTabSelect(true)}
            >
              <span
                className={tabSelect ?
                  'text-center text-[18px] sm:text-[20px] md:text-[24px] py-[16px] rounded-xl bg-white text-blue-500 w-full hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none' :
                  'text-center text-[18px] sm:text-[20px] md:text-[24px] py-[16px] text-gray-200 content-center cursor-pointer text-center'
                }
              >
                PROFILE REGISTRATION
              </span>
            </div>
            <div
              className='w-full flex justify-center'
              onClick={() => bufferSetTabSelect(false)}
            >
              <span
                className={!tabSelect ?
                  'text-center text-[18px] sm:text-[20px] md:text-[24px] py-[16px] rounded-xl bg-white text-blue-500 w-full hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none' :
                  'text-center text-[18px] sm:text-[20px] md:text-[24px] py-[16px] text-gray-200 content-center cursor-pointer text-center'
                }
              >VIEW PROFILE</span>
            </div>
          </div>
        </div>

        {tabSelect ?
          <BusinessProfileEditing
            businessProfileValue={businessProfileValue}
            setBusinessProfileValue={setBusinessProfileValue}
          />
          :
          <BusinessDetail
            businessProfileData={businessProfileValue || businessProfileValue[0]}
            isHideEdit={true}
          />
        }
      </div>
    </div>
  );
};

export default BusinessProfileRegister;
