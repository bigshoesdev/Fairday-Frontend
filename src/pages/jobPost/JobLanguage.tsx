import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import { AppDispatch } from "src/store";
import Button from 'src/components/common/Button';
import { getJobCategoryByAlpha } from "src/store/user/jobSlice";

const JobLanguage = ({ jobValue, bufferSetJobValue, errorSelectedCategory }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  useEffect(() => {
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const languageTypeData = jobConfig.jobConstManage.filter(item => item.category === "language");

  const handleItemClick = (itemName: string, _id: string) => {
    bufferSetJobValue({ ...jobValue, language: _id })
    setSelectedCategoryName(itemName);
  };

  const buttonClick = () => {
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] sm:text-[26px] text-[20px] font-bold'>Select A Job Language *</span>
            {/* <span className='text-black sm:text-[22px] text-[18px] font-bold'>From Our list and <span className='text-[#1880F1]'>(up to 3 sub categories)</span></span> */}
            <span className='text-black sm:text-[22px] text-[18px] font-bold'><span className='text-[#1880F1]'>only one Language</span></span>
            {
              selectedCategoryName &&
              <Button
                text={selectedCategoryName || "Select a job category"}
                onClick={buttonClick}
                className="bg-primaryBlue p-2 font-bold text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
              />
            }
            <span className="text-red-500">
              {errorSelectedCategory ? errorSelectedCategory : ''}
            </span>
          </div>
        }
      >
        <div className="columns-1 sm:columns-2 gap-6 max-h-80 overflow-y-auto">
          {
            languageTypeData.map((item, index) =>
              <div
                key={index}
                className="h-[50px] flex justify-start items-center cursor-pointer"
                onClick={() => handleItemClick(item.string, item._id)}
              >
                <img
                  src={`https://fairdayjobs.com/src/assets/images/${item.string}.png`}
                  alt="icon"
                  style={{ width: 30, height: 20, marginRight: 8 }}
                />
                {item.string}
              </div>
            )
          }
        </div>
      </DropPanel>
    </div>
  );
};

export default JobLanguage;
