import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const CertificationsSection = ({ appProfileValue, bufferSetAppProfileValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Certifications</span>
          <TextInput
            type="email"
            name="certificate"
            label="Certificate"
            value={appProfileValue.certificate}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}

            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Training</span>
          <TextInput
            type="email"
            name="training"
            label="Training"
            value={appProfileValue.training}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Professional Licenses</span>
          <TextInput
            type="email"
            name="license"
            label="License"
            value={appProfileValue.license}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default CertificationsSection;
