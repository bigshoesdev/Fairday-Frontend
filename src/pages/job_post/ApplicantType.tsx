import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import CheckboxLable from 'src/components/common/CheckboxLable';

const ApplicantType = ({checkboxStates, setCheckboxStates}) => {

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const applicantTypeData = GroupData.filter(item => item.category === 'applicanttype');

  const handleCheckboxChange = (label: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Applicant Type* <span className='text-black font-normal'>(Select all as applicable)</span></span>
            <span className='text-black text-[22px]'>Skilled</span>
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {applicantTypeData.map((item) => (
            <CheckboxLable
              key={item._id}
              label={item.string} // Display the string value for each checkbox
              checked={checkboxStates[item._id] || false} // Check if the checkbox is selected
              onChange={() => handleCheckboxChange(item._id)} // Toggle the checkbox
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default ApplicantType;
