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
          <div className="flex flex-col gap-2">
            <span className="text-[#1880F1] text-[22px] font-bold">Years of Experience Preferred*</span>
            {selectedItem ? (
              <span className='text-black text-[22px]'>{selectedItem.string.trim()}</span>
            ) : (
              <span className='text-gray-500 text-[22px] italic'></span>
            )}
            <span className='text-red-500'>
              {errorSelectedYearOption ? errorSelectedYearOption : ''}
            </span>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
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
