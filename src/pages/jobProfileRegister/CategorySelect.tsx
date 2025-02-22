import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import { AppDispatch } from "src/store";
import Button from 'src/components/common/Button';
import { getJobCategoryByAlpha } from "src/store/user/jobSlice";

const CategorySelect = ({ appProfileValue, bufferSetAppProfileValue }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const groupedData = jobConfig?.jobCategoryList ?? {};

  const handleItemClick = (itemId: string, itemName: string) => {
    const selectedCategories = appProfileValue.selectedCategories || [];

    if (selectedCategories.includes(itemId)) {
      bufferSetAppProfileValue({
        ...appProfileValue,
        selectedCategories: selectedCategories.filter(id => id !== itemId),
      });
    } else {
      if (selectedCategories.length < 5) {
        bufferSetAppProfileValue({
          ...appProfileValue,
          selectedCategories: [...selectedCategories, itemId],
        });
      }
    }
  };

  const handleRemoveCategory = (itemId: string) => {
    bufferSetAppProfileValue({
      ...appProfileValue,
      selectedCategories: appProfileValue.selectedCategories.filter(id => id !== itemId),
    });
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Select Occupation or Services Offered *</span>
            <span className='text-black text-[17px] font-bold'>
              From Our Category list <span className='text-[#1880F1]'>(up to 5 categories)</span>
            </span>
            <div className="flex flex-wrap gap-2 mb-4">
              {appProfileValue.selectedCategories?.map((categoryId) => {
                const categoryName = Object.values(groupedData)
                  .flat()
                  .find((item) => item.id === categoryId)?.name;

                return (
                  categoryName && (
                    <Button
                      key={categoryId}
                      text={categoryName}
                      onClick={() => handleRemoveCategory(categoryId)}
                      className="bg-primaryBlue p-2 font-bold text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                    />
                  )
                );
              })}
            </div>
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
                    className={`cursor-pointer ${appProfileValue.selectedCategories?.includes(item.id) ? 'text-blue-500 font-bold' : 'text-gray-700'
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

export default CategorySelect;
