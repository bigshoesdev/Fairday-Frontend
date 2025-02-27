import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const RegisterSection = ({ appProfileValue, bufferSetAppProfileValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold text-[18px] sm:text-[20px] mb-3'>Your Email*</span>
          <TextInput
            type="email"
            name="email"
            label=""
            value={appProfileValue.email}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3 text-[18px] sm:text-[20px]'>Your Name*</span>
          <div className='flex flex-row w-full gap-4'>
            <TextInput
              name="firstName"
              type="email"
              label="First Name"
              value={appProfileValue.firstName}
              onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
              style="w-full"
            />
            <TextInput
              name="lastName"
              type="email"
              label="Last Name"
              value={appProfileValue.lastName}
              onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: e.target.value })}
              style="w-full"
            />
          </div>
        </div>

        <label className="flex items-center space-x-5 mt-2">
          <input
            name="reciveConfirm"
            type="checkbox"
            className="w-[20px] h-[20px] form-checkbox text-blue-600"
            checked={appProfileValue.reciveConfirm}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: !appProfileValue[e.target.name] })}
          />
          <span className="font-bold text-[15px] sm:text-[18px] text-[#33495E]">
            Recieve Updated Jobs Opportunities and New Job Leads</span>
        </label>
      </Panel>
    </div>
  );
};

export default RegisterSection;
