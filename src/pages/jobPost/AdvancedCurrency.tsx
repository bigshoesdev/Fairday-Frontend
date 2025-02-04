import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const AdvancedCurrency = ({ selectedCurrency, setSelectedCurrency }) => {
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'currencytype');

  // Get the selected currency object
  const selectedCurrencyItem = jobTypeData.find(item => item._id === selectedCurrency);

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Currency Type</span>
            {selectedCurrencyItem ? (
              <span className='text-black text-[22px]'>{selectedCurrencyItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 text-[22px] italic'>Select a currency</span> // Placeholder text
            )}
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <RadioLabel
              key={item._id} // Ensure a unique key is provided for each element
              label={item.string.trim()} // Use the 'string' value from the data
              checked={selectedCurrency === item._id}
              onChange={() => setSelectedCurrency(item._id)}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default AdvancedCurrency;
