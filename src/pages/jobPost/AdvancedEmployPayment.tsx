import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const AdvancedEmployPayment = ({ jobValue, bufferSetJobValue }) => {
  
  const jobConfig = useSelector((state: any) => state.jobConfig);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'employmentPayment');
  const selectedCurrencyItem = jobTypeData.find(item => item._id === jobValue.selectedEmployPayment);

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Employment Payment Details</span>
            {selectedCurrencyItem ? (
              <span className='text-black text-[22px]'>{selectedCurrencyItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 text-[22px] italic'>Select a Employment Payment</span> // Placeholder text
            )}
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <RadioLabel
              name='selectedEmployPayment'
              key={item._id} // Ensure a unique key is provided for each element
              label={item.string.trim()} // Use the 'string' value from the data
              checked={jobValue.selectedEmployPayment === item._id}
              onChange={(e:any) => bufferSetJobValue({ ...jobValue, [e.target.name]: item._id })}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default AdvancedEmployPayment;
