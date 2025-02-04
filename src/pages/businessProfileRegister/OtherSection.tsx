import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const OtherSection = ({
  otherTitle,
  setOtherTitle,
  skillDetails,
  setSkillDetails
}) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Other Services Offered</span>
          <TextInput
            type="email"
            name="otherTitle"
            label="Write Here..."
            value={otherTitle}
            rows={2}
            multiline={true}
            onChange={(e) => setOtherTitle(e.target.value)}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Services Description*</span>
          <TextInput
            type="email"
            name="skillDetails"
            label="Write Here..."
            value={skillDetails}
            rows={3}
            multiline={true}
            onChange={(e) => setSkillDetails(e.target.value)}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default OtherSection;
