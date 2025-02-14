import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';
import TextInput from 'src/components/common/TextInput';

const AdvancedAppRequirements = ({ selectedAppRequirement, setSelectedAppRequirement, appRequirements, setAppRequirements }) => {
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'applicantRequirements');

  // Handle radio button selection
  const handleSelectionChange = (id) => {
    setSelectedAppRequirement(id);

    // Clear other fields, keeping only the selected one
    setAppRequirements(prev => ({
      [id]: prev[id] || "" // Preserve the text of the newly selected item, reset others
    }));
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
                label={item.string.trim()}
                checked={selectedAppRequirement === item._id}
                onChange={() => handleSelectionChange(item._id)}
              />
              <div className='pt-5 px-7'>
                <TextInput
                  type="text"
                  label="Description text"
                  value={appRequirements[item._id] || ""}
                  rows={2}
                  multiline={true}
                  disabled={selectedAppRequirement !== item._id} // Disable unless selected
                  onChange={(e) =>
                    setAppRequirements(prev => ({
                      ...prev,
                      [item._id]: e.target.value
                    }))
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
