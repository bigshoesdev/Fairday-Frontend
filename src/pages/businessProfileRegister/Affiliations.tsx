import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const Affiliations = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Affiliations (Optional) </span>
          <TextInput
            type="email"
            name="affiliations"
            label="Affiliations"
            value={businessProfileValue.affiliations}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default Affiliations;
