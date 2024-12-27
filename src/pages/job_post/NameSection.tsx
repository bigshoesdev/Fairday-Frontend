import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const NameSection = () => {

  const [businessName, setBusinessName] = useState('');

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
        Your Name or Business Name *</span>


        <TextInput
          type="email"
          label="Type Here..."
          value={businessName}
          rows={4}
          multiline={true}
          onChange={(e) => setBusinessName(e.target.value)}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default NameSection;
