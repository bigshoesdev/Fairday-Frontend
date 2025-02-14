import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import { AppDispatch } from "src/store";
import Button from 'src/components/common/Button';
import { getJobCategoryByAlpha } from "src/store/user/jobSlice";

const JobCategory = ({ jobValue, bufferSetJobValue}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  useEffect(() => {
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const { jobConfig } = useSelector((state: any) => state);
  const groupedData = jobConfig.jobCategoryList;

  const handleItemClick = (itemId: string, itemName: string) => {
    bufferSetJobValue({ ...jobValue, selectedCategory: itemId })
    setSelectedCategoryName(itemName);
  };

  const buttonClick = () => {
    console.log(`Selected category: ${selectedCategoryName || "None"}`);
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Select A Job Category *</span>
            <span className='text-black text-[17px] font-bold'>From Our list and <span className='text-[#1880F1]'>(up to 3 sub categories)</span></span>
            <Button
              text={selectedCategoryName || "Select a job category"}
              onClick={buttonClick}
              className="bg-primaryBlue p-2 font-bold text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            />
          </div>
        }
      >
        <div className="columns-1 sm:columns-2 gap-6">
          {Object.keys(groupedData).sort().map((letter) => (
            <div key={letter} className="break-inside-avoid mb-4">
              <h2 className="text-lg text-black font-bold mb-2 pb-1">{letter}</h2>
              <ul className="space-y-1">
                {groupedData[letter].map((item: { id: string; name: string }) => (
                  <li
                    key={item.id}
                    onClick={() => handleItemClick(item.id, item.name)}
                    className={`cursor-pointer ${jobValue.selectedCategory === item.id ? 'text-blue-500 font-bold' : 'text-gray-700'
                      } hover:text-blue-500`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default JobCategory;
