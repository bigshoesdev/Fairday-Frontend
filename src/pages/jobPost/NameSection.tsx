import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const NameSection = ({ jobValue, bufferSetJobValue, errorBusinessName }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
          Your Name or Business Name *</span>
        <TextInput
          name='businessName'
          type="email"
          label="Type Here..."
          value={jobValue.businessName}
          multiline={true}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          error={errorBusinessName}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default NameSection;
