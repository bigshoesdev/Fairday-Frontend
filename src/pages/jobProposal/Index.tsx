import NewJobPosts from 'src/pages/jobProposal/NewJobPosts';
import ActiveJobs from 'src/pages/jobProposal/ActiveJobs';
import EndedJobs from 'src/pages/jobProposal/EndedJobs';
import ShortlistedApplicants from 'src/pages/jobProposal/ShortlistedApplicants';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
// import { getAllJobs } from 'src/store/user/jobSlice';
import { getJobConstManage, getProposalJobs } from 'src/store/user/jobSlice';

const JobProposal = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { jobConfig } = useSelector((state: any) => state);

  const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
  const user = authSliceConfig.user;
  const userId = user?.sub;

  const jobDetailsInfos = Array.isArray(jobConfig.jobDetails) ? jobConfig.jobDetails : [];
  console.log('jobDetailsInfos:', jobDetailsInfos);
  const GroupData = jobConfig.jobConstManage;

  useEffect(() => {
    const data = { userId }
    dispatch(getJobConstManage());
    dispatch(getProposalJobs(data))
  }, [dispatch]);

  const buttonClick = () => {
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Job Proposal Management
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px]'>
        <div className='mt-[-100px] w-full flex flex-col gap-y-10'>
          <NewJobPosts
            jobDetailsInfos={jobDetailsInfos.filter(({ jobId }) => jobId.status === 1).map((item: any) => item.jobId)}
            GroupData={GroupData}
          />
          <ActiveJobs
            jobDetailsInfos={jobDetailsInfos.filter(({ jobId }) => jobId.status === 2).map((item: any) => item.jobId)}
            GroupData={GroupData}
          />
          <EndedJobs
            jobDetailsInfos={jobDetailsInfos.filter(({ jobId }) => jobId.status === 3).map((item: any) => item.jobId)}
            GroupData={GroupData}
          />

          {/* <ShortlistedApplicants /> */}
        </div>
      </div>
    </div>
  );
};

export default JobProposal;
