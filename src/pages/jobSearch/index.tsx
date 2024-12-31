import SearchBar from "src/pages/home/SearchBar"
import JobSearchBoard from "src/pages/jobSearch/JobSearchBoard"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getAllJobs } from 'src/store/user/jobSlice';
import { getJobConstManage } from 'src/store/user/jobSlice';

const JobSearch = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { jobConfig } = useSelector((state: any) => state);
  
    const jobDetailsInfos = jobConfig.jobDetails;
    const GroupData = jobConfig.jobConstManage;
  
    console.log('jobDetailsInfos', jobDetailsInfos);
    console.log('GroupData', GroupData);
    
    useEffect(() => {
      dispatch(getJobConstManage());
      dispatch(getAllJobs());
    }, [dispatch]);

    return (
        <div className='w-full items-center flex-colflex justify-center bg-[#f7fbff]'>
            <div className="container">This is map</div>
            <SearchBar/>
            <JobSearchBoard
                jobDetailsInfos={jobDetailsInfos}
                GroupData={GroupData}
            />
        </div>
    )
}

export default JobSearch