import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const OtherSection = ({
  appProfileValue,
  bufferSetAppProfileValue,
}) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3 text-[18px] sm:text-[20px]'>Other Occupational Title</span>
          <TextInput
            type="email"
            name="otherTitle"
            label=""
            value={appProfileValue.otherTitle}
            rows={2}
            multiline={true}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>

        <div className='flex flex-col text-[18px] sm:text-[20px]'>
          <span className='font-bold mb-3'>Skillset Description Details</span>
          <TextInput
            type="email"
            name="skillDetails"
            label=""
            value={appProfileValue.skillDetails}
            rows={3}
            multiline={true}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default OtherSection;
