import { useSelector } from 'react-redux';
import DropPanel from 'src/components/common/DropPanel';
import RadioLabel from 'src/components/common/RadioLabel';
import TextInput from 'src/components/common/TextInput';
import { useState } from 'react';

const AdvancedAppRequirements = ({ selectedAppRequirement, setSelectedAppRequirement, appRequirements, setAppRequirements }) => {
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const jobTypeData = GroupData.filter(item => item.category === 'applicantRequirements');

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
                onChange={() => setSelectedAppRequirement(item._id)}
              />
              <div className='pt-5 px-7'>
                <TextInput
                  type="text"
                  label="Description text"
                  value={appRequirements[item._id] || ""} // Retrieve specific value
                  rows={2}
                  multiline={true}
                  onChange={(e) =>
                    setAppRequirements(prev => ({ ...prev, [item._id]: e.target.value })) // Update specific item
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
