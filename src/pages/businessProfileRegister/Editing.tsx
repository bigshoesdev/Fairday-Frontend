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
import PicIdImage from 'src/pages/jobProfileRegister/PicIdImage';
import JobRegisterSection from 'src/pages/jobProfileRegister/RegisterSection'
import JobOtherSection from 'src/pages/jobProfileRegister/OtherSection'
import JobNameLocation from 'src/pages/jobProfileRegister/NameLocation'


const BusinessProfileEditing = ({
  businessProfileValue,
  setBusinessProfileValue
}) => {

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
    <div className='flex flex-col gap-8'>

      <div className='flex flex-col gap-4 w-full'>
        <p className='text-[40px] font-bold text-center'>
          User Account Infomation
        </p>
        <PicIdImage
          appProfileValue={businessProfileValue}
          bufferSetAppProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <JobRegisterSection
          appProfileValue={businessProfileValue}
          bufferSetAppProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

        <JobOtherSection
          appProfileValue={businessProfileValue}
          bufferSetAppProfileValue={(value: any) => setBusinessProfileValue(value)}
        />

     
      </div>



      <div className='flex flex-col gap-4'>

        <p className='text-[40px] font-bold text-center mt-24'>
          Business Additional Infomation
        </p>

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

        {/* <OverallRating
          hideEmployerConfirm={hideEmployerConfirm}
          setHideEmployerConfirm={setHideEmployerConfirm}
          agreeConfirm={agreeConfirm}
          setAgreeConfirm={setAgreeConfirm}
          setAutoSaveContrim={setAutoSaveContrim}
          autoSaveContrim={autoSaveContrim}
        /> */}

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

export default BusinessProfileEditing;
