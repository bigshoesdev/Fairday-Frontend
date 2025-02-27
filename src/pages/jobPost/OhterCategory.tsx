import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const OhterCategory = ({ jobValue, bufferSetJobValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <label className="flex items-center space-x-3">
          <input
            name='categoryConfirm'
            type="checkbox"
            className="sm:w-[25px] sm:h-[25px] w-[18px] h-[18px] form-checkbox text-blue-600"
            checked={jobValue.categoryConfirm}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: !jobValue[e.target.name]})}
          />
          <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
            Other Category <span className='text-blue-500 font-normal'>(Optional)</span></span>
        </label>

        <TextInput
          name="otherCategory"
          type="email"
          label="Type Here..."
          value={jobValue.otherCategory}
          rows={4}
          multiline={true}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
          disabled={!jobValue.categoryConfirm}
        />
      </Panel>
    </div>
  );
};

export default OhterCategory;
