import DropPanel from 'src/components/common/DropPanel';
import TextInput from 'src/components/common/TextInput';

const RegisterAd = ({ advertiseValue, bufferSetAdvertiseValue }) => {

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
            name="businessName"
            type="email"
            label="Business Name"
            value={advertiseValue.businessName}
            onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
            style="w-full"
          />

          <TextInput
            name="name"
            type="email"
            label="Your Name"
            value={advertiseValue.name}
            onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
            style="w-full"
          />

          <TextInput
          name='email'
            type="email"
            label="Your Email"
            value={advertiseValue.email}
            onChange={(e) => bufferSetAdvertiseValue({ ...advertiseValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </DropPanel>
    </div>
  );
};

export default RegisterAd;
