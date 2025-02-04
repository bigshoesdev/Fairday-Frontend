import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const InsertWebsite = ({insertWebsite, setInsertWebsite}) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
          Insert website</span>

        <TextInput
          type="email"
          label="Type Here..."
          value={insertWebsite}
          rows={4}
          multiline={true}
          onChange={(e) => setInsertWebsite(e.target.value)}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default InsertWebsite;
