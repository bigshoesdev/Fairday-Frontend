import SearchBar from "src/pages/home/SearchBar"
import JobSearchBoard from "src/pages/jobSearch/JobSearchBoard"
import MapContent from "src/pages/jobSearch/MapContent"

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

    useEffect(() => {
        dispatch(getJobConstManage());
        dispatch(getAllJobs());
    }, [dispatch]);

    return (
        <div className='w-full items-center flex-col flex justify-center bg-[#f7fbff]'>
            <div className="w-full flex">
                <MapContent />
            </div>
            <SearchBar />
            <div className="w-[80%]">
                <JobSearchBoard
                    jobDetailsInfos={jobDetailsInfos}
                    GroupData={GroupData}
                />
            </div>

        </div>
    )
}

export default JobSearch