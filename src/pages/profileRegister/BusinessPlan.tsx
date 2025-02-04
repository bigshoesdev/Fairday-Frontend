import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Panel from 'src/components/common/Panel';
import RadioLabel from 'src/components/common/RadioLabel';

const BusinessPlan = () => {

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const businessPlans = GroupData.filter(item => item.category === 'userBusinessPlan');
  console.log('jobConfig', businessPlans);

  const [selectedBusinessPlan, setSelectedBusinessPlan] = useState(null);

  return (
    <div className="w-full">
      <Panel classStyle="flex flex-col py-7 pl-7 pr-40 bg-white rounded-2xl gap-5 shadow">
        <span className="font-bold text-[26px] text-[#33495E]">
          Your Primary Business Plan (Select)
        </span>
        {businessPlans.map((item) => (
          <RadioLabel
            key={item._id}
            label={item.string.trim()}
            checked={selectedBusinessPlan === item._id}
            onChange={() => setSelectedBusinessPlan(item._id)}
          />
        ))}
      </Panel>
    </div>
  );
};

export default BusinessPlan;
