import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobDescription = ({ jobValue, bufferSetJobValue, errorDetailJobDescription }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">
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
          error={errorDetailJobDescription}
        />
      </Panel>
    </div>
  );
};

export default JobDescription;
