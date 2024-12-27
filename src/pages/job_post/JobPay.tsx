import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobPay = () => {

  const [jobPayRate, setJobPayRate] = useState('');

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
          JOB Payment Rate / Income Amount</span>

        <TextInput
          type="email"
          label="Type Here..."
          value={jobPayRate}
          rows={4}
          multiline={true}
          onChange={(e) => setJobPayRate(e.target.value)}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default JobPay;
