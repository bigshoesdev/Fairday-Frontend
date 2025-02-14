import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobDescription = ({ jobValue, bufferSetJobValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#33495E]">
          Job Description Details*</span>

        <TextInput
          name='detailJobDescription'
          type="email"
          label="Type Here..."
          value={jobValue.detailJobDescription}
          rows={4}
          multiline={true}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
        />
      </Panel>
    </div>
  );
};

export default JobDescription;
