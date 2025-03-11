import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const PromotionalDiscount = ({ advertiseValue, bufferSetAdvertiseValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
          Promotional Discount</span>

        <TextInput
          name="promoDiscount"
          type="email"
          label="Type Here..."
          value={advertiseValue.promoDiscount}
          rows={4}
          multiline={true}
          onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}

          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default PromotionalDiscount;
