import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const JobType = ({ jobValue, bufferSetJobValue, errorSelectedJobType }) => {

  const jobConfig  = useSelector((state: any) => state.jobConfig);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'jobtype');

  const selectedItem = jobTypeData.find(item => item._id === jobValue.selectedJobType);

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] sm:text-[26px] text-[20px] font-bold'>Job Type* <span className='text-black font-normal'>(Select as applicable - one required)</span></span>
            {selectedItem ? (
              <span className='text-black sm:text-[26px] text-[20px]'>{selectedItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 sm:text-[26px] text-[18px] italic'></span>
            )}
            <span className='text-red-500'>
              {errorSelectedJobType ? errorSelectedJobType : ''}
            </span>
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <RadioLabel
              name="selectedJobType"
              key={item._id}
              label={item.string.trim()}
              checked={jobValue.selectedJobType === item._id}
              onChange={(e:any) => bufferSetJobValue({ ...jobValue, [e.target.name]: item._id })}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default JobType;
