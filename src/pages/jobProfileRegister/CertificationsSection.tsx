import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const CertificationsSection = ({
  certificate,
  setCertificate,
  setTraining,
  training,
  license,
  setLicense
}) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Certifications</span>
          <TextInput
            type="email"
            name="Certificate"
            label="Certificate"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Training</span>
          <TextInput
            type="email"
            name="Training"
            label="Training"
            value={training}
            onChange={(e) => setTraining(e.target.value)}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Professional Licenses</span>
          <TextInput
            type="email"
            name="License"
            label="License"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default CertificationsSection;
