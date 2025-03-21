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
          <div className='gap-2'>
            <div className='text-[#1880F1] sm:text-[26px] text-[20px] font-bold mb-2'>Job Type* <span className='text-black font-normal'>(Select as applicable - one required)</span></div>
            {selectedItem ? (
              <span className='px-8 py-2 rounded-[6px] bg-blue-500 text-white'>{selectedItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 sm:text-[26px] text-[18px] italic'></span>
            )}
            <span className='text-red-500'>
              {errorSelectedJobType ? errorSelectedJobType : ''}
            </span>
          </div>
        }
      >
        <div className='flex flex-col gap-4 max-h-80 overflow-y-auto'>
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
