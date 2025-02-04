import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const JobType = ({selectedJobType, setSelectedJobType}) => {
  
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'jobtype');

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Job Type* <span className='text-black font-normal'>(Select as applicable - one required)</span></span>
            <span className='text-black text-[22px]'>One Time Service or Per Service</span>
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <RadioLabel
              key={item._id} // Ensure a unique key is provided for each element
              label={item.string.trim()} // Use the 'string' value from the data
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
