import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';
import { getJobConstManage } from 'src/store/user/jobSlice';


const AdvertiseRadius = ({ selectedAdvertiseRadius, setSelectedAdvertiseRadius }) => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'advertiseRadius');

  // Get the selected currency object
  const selectedCurrencyItem = jobTypeData.find(item => item._id === selectedAdvertiseRadius);

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Advertising Radius</span>
            {selectedCurrencyItem ? (
              <span className='text-black text-[22px]'>{selectedCurrencyItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 text-[22px] italic'></span> // Placeholder text
            )}
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <RadioLabel
              key={item._id} // Ensure a unique key is provided for each element
              label={item.string.trim()} // Use the 'string' value from the data
              checked={selectedAdvertiseRadius === item._id}
              onChange={() => setSelectedAdvertiseRadius(item._id)}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default AdvertiseRadius;
