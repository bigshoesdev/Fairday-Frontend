import JobBanner from "./jobBanner";
import JobList from "./jobList";
import JobCount from "./jobCount";
import JobSearchOptions from "./jobSearchOptions";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { getAllAdvertisements } from "src/store/user/advertisementSlice";
import Pagination from "src/components/common/Pageination";
import { useNavigate } from "react-router-dom";
import { generateSearchUrl } from "src/utlies/commonfunctions";

const JobSearchBoard = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { advertisementConfig } = useSelector((state: any) => state);
  const { filters, onSearchChange, jobDetailsInfos, GroupData } = props;
  const [viewMode, setViewMode] = useState("row");
  const [currentPage, setCurrentPage] = useState(filters.page || 1); // Initialize currentPage state

  useEffect(() => {
    dispatch(getAllAdvertisements());
  }, [dispatch]);

  const advertiseDetailsInfo = advertisementConfig.advertiseDetails;

  const advertisementImagePath = advertiseDetailsInfo.map(
    (item) => item.images[0]
  );

  const handlePageChange = (page: number) => {
    console.log(page);
    setCurrentPage(page); // Set the current page
    onSearchChange({ page: page }); // Update the parent component's filters
    navigate(generateSearchUrl(filters, new URLSearchParams()));
  };

  return (
    <div className="w-full flex gap-4 grid grid-cols-12">
      <div className="hidden md:block  md:col-span-2 p-4">
        <JobSearchOptions filters={filters} onSearchChange={onSearchChange} />
      </div>
      <div className="col-span-12 lg:col-span-7 md:col-span-6 text-white p-4">
        <JobCount
          jobDetailsInfos={jobDetailsInfos}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <JobList
          jobDetailsInfos={jobDetailsInfos}
          GroupData={GroupData}
          viewMode={viewMode}
        />
        <Pagination
          jobDetailsInfos={jobDetailsInfos}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} // Pass the setter function
          onPageChange={handlePageChange}
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
