import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const YearsExperience = ({ jobValue, bufferSetJobValue, errorSelectedYearOption }) => {
  const jobConfig = useSelector((state: any) => state.jobConfig);
  const GroupData = jobConfig.jobConstManage;
  const experienceYearsData = GroupData.filter(item => item.category === 'experienceyears');

  const selectedItem = experienceYearsData.find(item => item._id === jobValue.selectedYearOption);

  return (
    <div className="w-full">
      <DropPanel
        header={
          <div className="gap-2">
            <div className="text-[#1880F1] sm:text-[26px] text-[20px] font-bold mb-2">Years of Experience Preferred*</div>
            {selectedItem ? (
              <span className='px-8 py-2 rounded-[6px] bg-blue-500 text-white'>{selectedItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 text-[22px] italic'></span>
            )}
            <span className='text-red-500'>
              {errorSelectedYearOption ? errorSelectedYearOption : ''}
            </span>
          </div>
        }
      >
        <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
          {experienceYearsData.map((item) => (
            <RadioLabel
              name="selectedYearOption"
              key={item._id}
              label={item.string.trim()}
              checked={jobValue.selectedYearOption === item._id}
              onChange={(e: any) => bufferSetJobValue({ ...jobValue, [e.target.name]: item._id })}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default YearsExperience;
