import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const AdvancedInsurance = ({ selectedInsurance, setSelectedInsurance }) => {

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'insurancecoverage');

  const selectedItem = jobTypeData.find(item => item._id === selectedInsurance);

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Insurance Coverage <span className='text-black font-normal'>( optional / one recommended)</span></span>
            {selectedItem ? (
              <span className='text-black text-[22px]'>{selectedItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 text-[22px] italic'></span>
            )}
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <RadioLabel
              key={item._id} // Ensure a unique key is provided for each element
              label={item.string.trim()} // Use the 'string' value from the data
              checked={selectedInsurance === item._id}
              onChange={() => setSelectedInsurance(item._id)}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default AdvancedInsurance;
