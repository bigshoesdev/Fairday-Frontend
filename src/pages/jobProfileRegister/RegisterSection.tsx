import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const RegisterSection = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  reciveConfirm,
  setReciveConfirm }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Your Email*</span>
          <TextInput
            type="email"
            name="email"
            label=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Your Name*</span>
          <div className='flex flex-row w-full gap-4'>
            <TextInput
              name="firstName"
              type="email"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style="w-full"
            />
            <TextInput
              name="lastName"
              type="email"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style="w-full"
            />
          </div>
        </div>

        <label className="flex items-center space-x-5 mt-2">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] form-checkbox text-blue-600"
            checked={reciveConfirm}
            onChange={() => setReciveConfirm((prev) => !prev)}
          />
          <span className="font-bold text-[18px] text-[#33495E]">
            Recieve Updated Jobs Opportunities and New Job Leads</span>
        </label>
      </Panel>
    </div>
  );
};

export default RegisterSection;
