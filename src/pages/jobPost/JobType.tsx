import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const JobType = ({ selectedJobType, setSelectedJobType }) => {

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'jobtype');

  const selectedItem = jobTypeData.find(item => item._id === selectedJobType);

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Job Type* <span className='text-black font-normal'>(Select as applicable - one required)</span></span>
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
              key={item._id}
              label={item.string.trim()}
              checked={selectedJobType === item._id}
              onChange={() => setSelectedJobType(item._id)}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default JobType;
