import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { BiBold } from 'react-icons/bi';

const Tabs = ({ value }: any) => {
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


  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    if (Number(newValue) === 1) {
      if (appProfileDetails[0]) {
        navigate('/user/userProfile')
      } else {
        navigate('/job-applicant-profile-registration')
      }
    } else {
      if (businessProfileDetails[0]) {
        navigate('/business-profile')
      } else {
        navigate('/business-applicant-profile-registration')
      }
    }
  };



  return (
    <div className="w-full max-w-2xl mx-auto mt-10 flex justify-center">
      {/* Tab Headers */}
      {/* <div className="flex text-white flex-row gap-x-2">
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
      </div> */}

      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Job Applicant Profile" value={1} sx={{ fontSize: '16px', fontWeight: 'bold' }}/>
          <Tab label="Business Profile" value={2} sx={{ fontSize: '16px', fontWeight: 'bold' }}/>
        </TabList>
      </TabContext>

    </div>
  );
};

export default Tabs;
