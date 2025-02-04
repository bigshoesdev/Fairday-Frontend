import  { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const OhterCategory = ({otherCategory, setOtherCategory, categoryConfirm, setCategoryConfirm}) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-[25px] h-[25px] form-checkbox text-blue-600"
            checked={categoryConfirm}
            onChange={() => setCategoryConfirm((prev) => !prev)}
          />
          <span className="font-bold text-[26px] text-[#33495E]">
            Other Category <span className='text-blue-500 font-normal'>(Optional)</span></span>
        </label>

        <TextInput
          type="email"
          label="Type Here..."
          value={otherCategory}
          rows={4}
          multiline={true}
          onChange={(e) => setOtherCategory(e.target.value)}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default OhterCategory;
