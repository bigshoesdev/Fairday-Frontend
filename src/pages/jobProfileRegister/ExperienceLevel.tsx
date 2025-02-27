import Panel from 'src/components/common/Panel';
import { useSelector } from 'react-redux';

const ExperienceLevel = ({ appProfileValue, bufferSetAppProfileValue }) => {

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const experienceYears = GroupData.filter(item => item.category === 'experienceLevel');

  const handleSelection = (index) => {
    const selectedOption = experienceYears[index];
    bufferSetAppProfileValue({ ...appProfileValue, selectedExperienceLevel: selectedOption._id });
  };

  return (
    <div className="w-full">
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-2 shadow-lg'}>
        <p className='font-bold text-[18px] sm:text-[20px]'>Select Experience Level</p>
        <div className="px-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-4">
          {experienceYears.map((option, index) => (
            <div
              key={index}
              className={`text-center rounded-lg p-4 cursor-pointer ${appProfileValue.selectedExperienceLevel === option._id ? 'bg-primaryBlue text-white font-bold' : 'bg-gray-200 text-black font-bold'
                }`}
              onClick={() => handleSelection(index)}
            >
              {option.string.trim()}
            </div>
          ))}
        </div>

      </Panel>
    </div>
  );
};

export default ExperienceLevel;
