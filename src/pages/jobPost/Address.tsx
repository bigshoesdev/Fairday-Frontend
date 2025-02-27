import { useEffect } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const Address = ({ jobValue, bufferSetJobValue, errorUserStreet, errorUserCity, errorUserCountry }) => {

  useEffect(() => {
    if (jobValue.addressConfirm) {
      bufferSetJobValue({
        ...jobValue,
        userStreet: jobValue.street,
        userCity: jobValue.city,
        userCountry: jobValue.country
      });
    } else {
      bufferSetJobValue({
        ...jobValue,
        userStreet: '',
        userCity: '',
        userCountry: ''
      });
    }
  }, [jobValue.addressConfirm, jobValue.street, jobValue.city, jobValue.country]);

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">Your Address / Location *</span>

        <label className="flex items-center space-x-3">
          <input
            name='addressConfirm'
            type="checkbox"
            className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] form-checkbox text-blue-600"
            checked={jobValue.addressConfirm}
            onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: !jobValue[e.target.name] })}
          />
          <span className="font-bold sm:text-[20px] text-[18px] text-[#33495E]">
            Same address as Job Location listed above
          </span>
        </label>

        <span className="font-bold sm:text-[26px] text-[20px] text-[#33495E]">OR</span>

        <TextInput
          name='userStreet'
          type="text"
          label="Street Name*"
          value={jobValue.userStreet}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
          disabled={jobValue.addressConfirm} 
          error={errorUserStreet}
        />

        <TextInput
          name='userCity'
          type="text"
          label="City Zip*"
          value={jobValue.userCity}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
          error={errorUserCity}
          disabled={jobValue.addressConfirm}
        />

        <TextInput
          name='userCountry'
          type="text"
          label="Country*"
          value={jobValue.userCountry}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
          error={errorUserCountry}
          disabled={jobValue.addressConfirm}
        />
      </Panel>
    </div>
  );
};

export default Address;
