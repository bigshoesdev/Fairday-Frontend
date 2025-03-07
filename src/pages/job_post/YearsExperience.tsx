import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';

const YearsExperience = ({selectedYearOption, setSelectedYearOption}) => {
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const experienceYearsData = GroupData.filter(item => item.category === 'experienceyears');

  const handleOptionChange = (option: string) => {
    setSelectedYearOption(option);
  };

  return (
    <div className="w-full">
      <DropPanel
        header={
          <div className="flex flex-col gap-2">
            <span className="text-[#1880F1] text-[22px] font-bold">Years of Experience Preferred</span>
            <span className="text-black text-[22px]">0-1 Yr</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          {experienceYearsData.map((item) => (
            <RadioLabel
              key={item._id} 
              label={item.string.trim()} 
              checked={selectedYearOption === item._id}
              onChange={() => handleOptionChange(item._id)}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default YearsExperience;
