import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const InsertWebsite = ({ advertiseValue, bufferSetAdvertiseValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
          Insert website</span>

        <TextInput
        name="insertWebsite"
          type="email"
          label="Type Here..."
          value={advertiseValue.insertWebsite}
          rows={4}
          multiline={true}
          onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default InsertWebsite;
