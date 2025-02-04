import JobBanner from "./jobBanner";
import JobList from "./jobList";
import JobCount from "./jobCount";
import JobSearchOptions from "./jobSearchOptions";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { getAllAdvertisements } from 'src/store/user/advertisementSlice';


const JobSearchBoard = (props: any) => {

  const dispatch = useDispatch<AppDispatch>();

  const { advertisementConfig } = useSelector((state: any) => state);
  const { jobDetailsInfos, GroupData } = props

  useEffect(() => {
    dispatch(getAllAdvertisements());
  }, [dispatch]);

  const advertiseDetailsInfo = advertisementConfig.advertiseDetails;

  const advertisementImagePath = advertiseDetailsInfo.map(item => item.images[0])

  console.log('This is advertisemenges', advertisementImagePath);

  return (
    <div className="w-full flex gap-4 grid grid-cols-12">
      <div className="hidden md:block  md:col-span-2 p-4">
        <JobSearchOptions />
      </div>
      <div className="col-span-12 lg:col-span-7 md:col-span-6 text-white p-4">
        <JobCount />
        <JobList
          jobDetailsInfos={jobDetailsInfos}
          GroupData={GroupData}
        />
      </div>
      <div className="hidden md:block md:col-span-3 p-4">
        {advertisementImagePath.map((imagePath, index) => (
          <JobBanner key={index} src={`http://localhost:8000${imagePath}`} />
        ))}
      </div>

      <div className="block md:hidden col-span-12 p-4">
        {advertisementImagePath.map((imagePath, index) => (
          <JobBanner key={index} src={`http://localhost:8000${imagePath}`} />
        ))}
      </div>

    </div>
  );
};

export default JobSearchBoard;
