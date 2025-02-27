import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';

const Tabs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
  const user = authSliceConfig.user;
  const userId = user?.sub;

  useEffect(() => {
    dispatch(viewAppProfile({ userId: userId }));
    dispatch(viewBusinessProfile({ userId: userId }));
  }, [dispatch, authSliceConfig.isAuthenticate]);

  const applicantProfileConfig = useSelector((state: any) => state.appProfileConfig);
  const { appProfileDetails } = applicantProfileConfig;

  const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
  const { businessProfileDetails } = BusinessProfileConfig;


  const applicantViewButton = () => {
    if (appProfileDetails[0]) {
      navigate('/user/userProfile')
    } else {
      navigate('/job-applicant-profile-registration')
    }
  }

  const businessViewButton = () => {
    if (businessProfileDetails[0]) {
      navigate('/business-profile')
    } else {
      navigate('/business-applicant-profile-registration')
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {/* Tab Headers */}
      <div className="flex text-white flex-row gap-x-2">
        <button
          className={`w-1/2 sm:py-3 py-2  text-center text-[16px] sm:text-lg font-semibold transition border-b-2 bg-blue-500`}
          onClick={applicantViewButton}
        >
          Job Applicant Profile
        </button>
        <button
          className={`w-1/2 sm:py-3 py-2 text-center text-[16px] sm:text-lg font-semibold transition border-b-2 bg-blue-500`}
          onClick={businessViewButton}
        >
          Business Profile
        </button>
      </div>
    </div>
  );
};

export default Tabs;
