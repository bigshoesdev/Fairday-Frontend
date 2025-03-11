// import DropPanel from 'src/components/common/DropPanel';
// import Button from 'src/components/common/Button';


// const BusinessCategory = () => {

//   const buttonClick = () => {
//     console.log('This is button clicked!!');
//   };

//   return (
//     <div className='w-full'>
//       <DropPanel
//         header={
//         <div className='flex flex-col gap-2'>
//           <span className='text-[#1880F1] text-[22px] font-bold'>Business Advertisement Category</span>
//           <span className='text-black text-[17px] font-bold'>From Our list and <span className='text-[#1880F1]'>(Select up to 5 key Terms in the order of importane being first)</span></span>
//           <Button
//             text="Restaurant, Catering, Food Services"
//             onClick={buttonClick}
//             className="w-1/2 bg-primaryBlue p-2 font-bold text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none "
//           />
//         </div>
//       }
//       >
//         <p>Custom Panel Content 1</p>
//         <p>Custom Panel Content 2</p>
//         <p>Custom Panel Content 3</p>
//       </DropPanel>
//     </div>
//   );
// };

// export default BusinessCategory;




import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import { AppDispatch } from "src/store";
import Button from 'src/components/common/Button';
import { getJobCategoryByAlpha } from "src/store/user/jobSlice";

const BusinessCategory = ({ advertiseValue, bufferSetAdvertiseValue }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const groupedData = jobConfig?.jobCategoryList ?? {};

  const handleItemClick = (itemId: string, itemName: string) => {
    const selectedCategories = advertiseValue.selectedCategories || [];

    if (selectedCategories.includes(itemId)) {
      bufferSetAdvertiseValue({
        ...advertiseValue,
        selectedCategories: selectedCategories.filter(id => id !== itemId),
      });
    } else {
      if (selectedCategories.length < 5) {
        bufferSetAdvertiseValue({
          ...advertiseValue,
          selectedCategories: [...selectedCategories, itemId],
        });
      }
    }
  };

  const handleRemoveCategory = (itemId: string) => {
    bufferSetAdvertiseValue({
      ...advertiseValue,
      selectedCategories: advertiseValue.selectedCategories.filter(id => id !== itemId),
    });
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] sm:text-[22px] text-[18px] font-bold'>Business Advertisement Category*</span>
            <span className='text-black sm:text-[17px] text-[15px] font-bold'>
              From Our Category list and<span className='text-[#1880F1]'>( Select up to 5 key Terms in the order of importance being first)</span>
            </span>
            <div className="flex flex-wrap gap-2 mb-4">
              {advertiseValue.selectedCategories?.map((categoryId) => {
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
                    className={`cursor-pointer ${advertiseValue.selectedCategories?.includes(item.id) ? 'text-blue-500 font-bold' : 'text-gray-700'
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

export default BusinessCategory;
