import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';
import { getJobConstManage } from 'src/store/user/jobSlice';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { messageHandle } from "src/store/systemSetting/commonSlice";
import JobProfileEditing from 'src/pages/jobProfileRegister/Editing';
import CandidateDetail from "src/pages/userProfile/candidateDetail";

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

  const [tabSelect, setTabSelect] = useState(true);

  const bufferSetTabSelect = (bool) => {
    setTabSelect(bool)
  }


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
          <JobProfileEditing
            appProfileValue={appProfileValue}
            setAppProfileValue={setAppProfileValue}
          />
          :
          <CandidateDetail
            item={appProfileValue}
          />
        }

      </div>
    </div>
  );
};

export default JobProfileRegister;
