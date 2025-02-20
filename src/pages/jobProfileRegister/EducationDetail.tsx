import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const EducationDetail = ({
  appProfileValue,
  bufferSetAppProfileValue,
}) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold  text-[20px] mb-2'>Educational detail <span className='text-[18px] font-normal'> (Optional)</span></span>
          <TextInput
            type="email"
            name="educationDetail"
            label=""
            value={appProfileValue.educationDetail}
            rows={4}
            multiline={true}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default EducationDetail;
