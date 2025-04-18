import NewJobPosts from 'src/pages/jobManagement/NewJobPosts';
import ActiveJobs from 'src/pages/jobManagement/ActiveJobs';
import EndedJobs from 'src/pages/jobManagement/EndedJobs';
import ShortlistedApplicants from 'src/pages/jobManagement/ShortlistedApplicants';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
// import { getAllJobs } from 'src/store/user/jobSlice';
import { getJobConstManage, getJobsById } from 'src/store/user/jobSlice';

const JobManagement = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { jobConfig } = useSelector((state: any) => state);

  const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
  const user = authSliceConfig.user;
  const userId = user?.sub;


  // const jobDetailsInfos = jobConfig.jobDetails;
  const jobDetailsInfos = Array.isArray(jobConfig.jobDetails) ? jobConfig.jobDetails : [];
  console.log('jobDetailsInfos:', jobDetailsInfos);

  const GroupData = jobConfig.jobConstManage;

  useEffect(() => {
    const data = { userId }
    dispatch(getJobConstManage());
    dispatch(getJobsById(data))
    // dispatch(getAllJobs());
  }, [dispatch]);

  //button click event
  const buttonClick = () => {
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Job Post & Applicant Management
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px]'>
        <div className='mt-[-100px] w-full flex flex-col gap-y-10'>
          <NewJobPosts
            jobDetailsInfos={jobDetailsInfos.filter(({ status }) => status === 1)}
            GroupData={GroupData}
          />
          <ActiveJobs
            jobDetailsInfos={jobDetailsInfos.filter(({ status }) => status === 2)}
            GroupData={GroupData}
          />
          <EndedJobs
            jobDetailsInfos={jobDetailsInfos.filter(({ status }) => status === 3)}
            GroupData={GroupData}
          />

          {/* <ShortlistedApplicants /> */}
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
