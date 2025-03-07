import JobBanner from "./jobBanner";
import JobList from "./jobList";
import JobCount from "./jobCount";
import JobSearchOptions from "./jobSearchOptions";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { getAllAdvertisements } from "src/store/user/advertisementSlice";

const JobSearchBoard = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { advertisementConfig } = useSelector((state: any) => state);
  const { filters, onSearchChange, jobDetailsInfos, GroupData, searchCategory, categoryCountList } = props;
  const [viewMode, setViewMode] = useState("row")

  useEffect(() => {
    dispatch(getAllAdvertisements());
  }, [dispatch]);

  const advertiseDetailsInfo = advertisementConfig.advertiseDetails;

  const advertisementImagePath = advertiseDetailsInfo.map(
    (item) => item.images[0]
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
        <JobCount jobDetailsInfos={jobDetailsInfos} viewMode={viewMode} setViewMode={setViewMode}/>
        <JobList jobDetailsInfos={jobDetailsInfos} GroupData={GroupData} viewMode={viewMode} />
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

