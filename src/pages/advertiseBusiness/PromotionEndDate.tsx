import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const PromotionEndDate = ({ advertiseValue, bufferSetAdvertiseValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
          Promotion end Date</span>

        <TextInput
          name="promoEndDate"
          type="email"
          label="Type Here..."
          value={advertiseValue.promoEndDate}
          rows={4}
          multiline={true}
          onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default PromotionEndDate;
