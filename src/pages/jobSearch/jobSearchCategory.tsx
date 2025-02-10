import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { updateCurrentJobData } from "src/store/user/jobSlice";
import { AppDispatch } from "src/store";

interface JobConfigState {
  jobCategoryList: Record<string, string[]>;
  jobConstManage: { category: string; string: string; _id: string }[];
}

interface RootState {
  jobConfig: JobConfigState;
}

const JobSearchCategory = ({ jobSearchTitle, jobSearchType, searchList, categoryCountList }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { jobConfig } = useSelector((state: RootState) => state);
  const { jobType, applicantType, experienceYearsType }: any = jobConfig;

  const [isExpanded, setIsExpanded] = useState(false);

  const [selectedItems, setSelectedItems] = useState({
    jobType: jobType || null,
    applicantType: applicantType || null,
    experienceYearsType: experienceYearsType || null,
  });

  useEffect(() => {
    setSelectedItems({
      jobType,
      applicantType,
      experienceYearsType,
    });
  }, [jobType, applicantType, experienceYearsType]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedItems = isExpanded ? searchList : searchList.slice(0, 5);

  const handleItemClick = (category: string, value: string | number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));

    // dispatch(updateCurrentJobData({ key: category, value: value }));
    dispatch(updateCurrentJobData({ key: category, value: value === selectedItems[category] ? "" : value }));
  };

  return (
    <div className="mb-6">
      <p className="text-[16px] font-semibold text-black">{jobSearchTitle}</p>
      <ul className="mt-2 space-y-1">
        {displayedItems.map((jobitem, index) => {
          const isSelected = jobitem._id === selectedItems[jobSearchType];
          return (
            <li
              key={index}
              className={`text-[15px] flex justify-between cursor-pointer ${
                isSelected ? "text-blue-600 font-semibold" : "text-black"
              }`}
              onClick={() => handleItemClick(jobSearchType, jobitem._id)}
            >
              <span>{jobitem.string}</span>
              <span className="text-gray-500 text-sm">
                ({categoryCountList.find((item) => item._id === jobitem._id)?.count || 0})
              </span>
            </li>
          );
        })}
      </ul>
      {searchList.length > 5 && (
        <div className="text-black font-semibold cursor-pointer mt-2" onClick={toggleExpansion}>
          {isExpanded ? (
            <span>
              <RemoveCircleIcon className="text-blue-500" /> less &lt;
            </span>
          ) : (
            <span>
              <AddCircleIcon className="text-blue-500" /> more &gt;
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearchCategory;
