import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const WebsiteLink = ({ websiteLink, setWebsiteLink }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Website link (Optional) </span>
          <TextInput
            type="email"
            name="WebsiteLink"
            label="Type Your Linke Here"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default WebsiteLink;
