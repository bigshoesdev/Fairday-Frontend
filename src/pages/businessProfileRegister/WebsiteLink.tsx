import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const WebsiteLink = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Website link (Optional) </span>
          <TextInput
            type="email"
            name="websiteLink"
            label="Type Your Linke Here"
            value={businessProfileValue.websiteLink}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default WebsiteLink;
