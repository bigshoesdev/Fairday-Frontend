import DropPanel from 'src/components/common/DropPanel';
import TextInput from 'src/components/common/TextInput';

const RegisterAd = ({businessName, setBusinessName, name, setName, email, setEmail}) => {

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[24px] font-bold'>Register Your Advertisement</span>
          </div>
        }
      >
        <div className='flex flex-col gap-4 p-6'>
          <TextInput
            type="email"
            label="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            style="w-full"
          />

          <TextInput
            type="email"
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style="w-full"
          />

          <TextInput
            type="email"
            label="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style="w-full"
          />
        </div>
      </DropPanel>
    </div>
  );
};

export default RegisterAd;
