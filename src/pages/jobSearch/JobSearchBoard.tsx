import JobBanner from "./jobBanner";
import JobList from "./jobList";
import JobCount from "./jobCount";
import JobSearchOptions from "./jobSearchOptions";
import Skeleton from '@mui/material/Skeleton';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { getAllAdvertisements } from "src/store/user/advertisementSlice";

const JobSearchBoard = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { advertisementConfig } = useSelector((state: any) => state);
  const { filters, onSearchChange, jobDetailsInfos, GroupData, searchCategory, categoryCountList, loading } = props;
  const [viewMode, setViewMode] = useState("row")

  useEffect(() => {
    dispatch(getAllAdvertisements());
  }, [dispatch]);

  // useEffect(() => {
  //   if (jobDetailsInfos.length === 0) {
  //     setLoading(true)
  //   } else {
  //     setLoading(false)
  //   }
  // }, [jobDetailsInfos])

  const advertiseDetailsInfo = advertisementConfig.advertiseDetails;

  const advertisementImagePath = advertiseDetailsInfo.map(
    (item: any) => item.images[0]
  );

  return (
    <div className="container w-full grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-4 xl:col-span-2">
        <JobSearchOptions
          filters={filters}
          onSearchChange={onSearchChange}
          searchCategory={searchCategory}
          categoryCountList={categoryCountList}
        />
      </div>
      <div className="col-span-12 lg:col-span-8 xl:col-span-7 text-white">
        <JobCount jobDetailsInfos={jobDetailsInfos} viewMode={viewMode} setViewMode={setViewMode} />

        {
          loading?
            <>
              {Array(3).fill(0).map((item, index) => index).map((item) => (
                <div key={item} className="bg-white shadow-lg rounded-lg p-3 md:p-6 w-full mt-5 flex flex-col">
                  <div className="flex items-start">
                    <Skeleton animation="wave" variant="circular" width={55} height={55} />
                    <div className="ml-4 text-[15px] w-full">
                      <Skeleton animation="wave" />
                      <div className=" hidden md:block">
                        <Skeleton animation="wave" width={"100%"} height={200} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
            :
            <JobList jobDetailsInfos={jobDetailsInfos} GroupData={GroupData} viewMode={viewMode} />
        }
      </div>

      <div className="grid grid-cols-12 col-span-12 xl:col-span-3 gap-4 py-5 ">
        {advertisementImagePath.map((imagePath, index) => (
          <JobBanner key={index} src={`https://api.fairdayjobs.com${imagePath}`} />
        ))}
      </div>
      
    </div>
  );
};

export default JobSearchBoard;

