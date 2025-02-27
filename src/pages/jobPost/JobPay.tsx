import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobPay = ({ jobValue, bufferSetJobValue}) => {


  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
          JOB Payment Rate / Income Amount</span>

        <TextInput
        name="jobPayRate"
          type="email"
          label="Type Here..."
          value={jobValue.jobPayRate}
          rows={4}
          multiline={true}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default JobPay;
