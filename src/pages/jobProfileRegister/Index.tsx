import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';
import { getJobConstManage } from 'src/store/user/jobSlice';
import Button from 'src/components/common/Button';
import RegisterSection from 'src/pages/jobProfileRegister/RegisterSection'
import CategorySelect from 'src/pages/jobProfileRegister/CategorySelect'
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
import { registerAppProfile } from 'src/store/user/appProfileSlice';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { messageHandle } from "src/store/systemSetting/commonSlice";

const JobProfileRegister = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;
  const userEmail = user?.email;

  useEffect(() => {
    dispatch(viewAppProfile({ userId: userId }));
  }, [dispatch]);

  const applicantProfileConfig = useSelector((state: any) => state.appProfileConfig);
  const { appProfileDetails } = applicantProfileConfig;
  const bufferLink = applicantProfileConfig?.bufferLink;

  useEffect(() => {
    dispatch(getJobConstManage());
    if (bufferLink) {
      const formattedBufferLink = bufferLink.startsWith('/')
        ? bufferLink
        : `/${bufferLink}`;

      navigate(formattedBufferLink);
    }
  }, [dispatch, bufferLink]);

  const [appProfileValue, setAppProfileValue] = useState({
    userId: userId || "",
    email: userEmail || "",
    firstName: "",
    lastName: "",
    reciveConfirm: false,
    selectedCategories: [],
    otherTitle: "",
    skillDetails: "",
    certificate: "",
    training: "",
    license: "",
    street: "",
    city: "",
    country: "",
    selectedIdPic: "",
    selectedLocationYears: "",
    selectedExperienceLevel: "",
    selectedResume: "",
    selectedReferrial: "",
    educationDetail: "",
    workHistoryDetail: "",
    verifyRequiredConfirm: false,
    resumeReviewConfirm: false,
    referProfileConfirm: false,
    selectedPayment: "mastercard",
    preScreeningReports: [],
  });

  useEffect(() => {
    if (appProfileDetails && appProfileDetails.length > 0) {
      setAppProfileValue((prevState) => ({
        ...prevState,
        ...appProfileDetails[0],
      }));
    }
  }, []);

  const [hideEmployerConfirm, setHideEmployerConfirm] = useState(false);
  const [agreeConfirm, setAgreeConfirm] = useState(false);
  const [autoSaveContrim, setAutoSaveContrim] = useState(false);

  const registerButton = () => {

    console.log("autoSaveContrim", autoSaveContrim);
    
    if (autoSaveContrim) {
      const formData: any = new FormData();

      Object.keys(appProfileValue).forEach((key: string) => {
        if (key === 'selectedCategories') {
          appProfileValue.selectedCategories.forEach((categoryId: string) => {
            formData.append('selectedCategories[]', categoryId);
          });
        } else {
          formData.append(key, appProfileValue[key]);
        }
      });

      dispatch(registerAppProfile(formData));
    } else {

      console.log("###" );
      
      dispatch(messageHandle({ type: "info", message: "Please check Email for Confirmation checkbox for registering your profile" }));
    }

  };

  const viewProfileButton = () => {
    if (appProfileDetails?.length > 0) {
      navigate('/user/userProfile');
    } else {
      dispatch(messageHandle({ type: "error", message: "Please complete your profile!" }));
    }
  };


  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='flex flex-col text-center font-bold text-[30px] sm:text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px] px-4'>

        <span>Job Applicant Profile Registration </span>
        <span className='text-[20px] mt-5'>Apply, Interview & Get Hired in a few clicks!</span>
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-50px] sm:mt-[-70px] w-full'>
          <div className='p-[8px] sm:p-[15px] flex flex-row bg-blue-500 items-center rounded-xl'>
            <a href="#" className='w-full flex justify-center'>
              <span className='text-[18px] sm:text-[20px] md:text-[24px] text-gray-200 content-center cursor-pointer text-center'>PROFILE REGISTRATION</span>
            </a>
            <a href="#" className='w-full flex justify-center'>
              <Button
                text="VIEW PROFILE"
                onClick={viewProfileButton}
                className='text-[18px] sm:text-[20px] md:text-[24px] py-[16px] rounded-xl bg-white text-blue-500 w-full hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
              />
            </a>
          </div>
        </div>

        <RegisterSection
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        <CategorySelect
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />


        <OtherSection
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        <ExperienceLevel
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        <CertificationsSection
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        {/* <PicIdImage
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        /> */}

        <NameLocation
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        <UploadResume
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        <EducationDetail
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />
        <WorkHistofyDetail
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        <UploadReferrials
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        {/* <VerifyRequire
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        /> */}

        <ReportsLinks
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        />

        {/* <OverallRating
          hideEmployerConfirm={hideEmployerConfirm}
          setHideEmployerConfirm={setHideEmployerConfirm}
          agreeConfirm={agreeConfirm}
          setAgreeConfirm={setAgreeConfirm}
          setAutoSaveContrim={setAutoSaveContrim}
          autoSaveContrim={autoSaveContrim}
        /> */}
        {/* 
        <PaymentArea
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        /> */}

        <label className="flex items-center space-x-5 ">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] form-checkbox text-blue-600"
            checked={autoSaveContrim}
            onChange={() => setAutoSaveContrim((prev) => !prev)}
          />
          <span className="font-bold text-[16px] text-gray-600">
            Look To Your Email for Confirmation
          </span>
        </label>

        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="REGISTER PROFILE"
            onClick={() => registerButton()}
            // disable={!autoSaveContrim}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <div className='text-[15px] text-black font-bold px-10 sm:px-60 flex justify-center justify-between mt-5'>
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
