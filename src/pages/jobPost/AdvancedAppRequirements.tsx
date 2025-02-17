import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';
import TextInput from 'src/components/common/TextInput';

const AdvancedAppRequirements = ({ jobValue, bufferSetJobValue }) => {
  const jobConfig = useSelector((state: any) => state.jobConfig);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'applicantRequirements');

  const handleSelectionChange = (id) => {
    bufferSetJobValue({
      ...jobValue,
      selectedAppRequirement: id,
      appRequirements: {
        [id]: jobValue.appRequirements?.[id] || "" // Preserve existing text if available
      }
    });
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Applicant Requirements</span>
            <span className='text-black text-[22px]'>Education Requirements & Description Text box</span>
          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          {jobTypeData.map((item) => (
            <div key={item._id}>
              <RadioLabel
                name='selectedAppRequirement'
                label={item.string.trim()}
                checked={jobValue.selectedAppRequirement === item._id}
                onChange={() => handleSelectionChange(item._id)}
              />
              <div className='pt-5 px-7'>
                <TextInput
                  name={`appRequirements-${item._id}`}
                  type="text"
                  label="Description text"
                  value={jobValue.appRequirements?.[item._id] || ""}
                  rows={2}
                  multiline={true}
                  disabled={jobValue.selectedAppRequirement !== item._id}
                  onChange={(e) =>
                    bufferSetJobValue({
                      ...jobValue,
                      appRequirements: {
                        ...jobValue.appRequirements,
                        [item._id]: e.target.value
                      }
                    })
                  }
                  style="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default AdvancedAppRequirements;
