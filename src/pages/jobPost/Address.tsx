import { useEffect } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const Address = ({
  userStreet,
  userCity,
  userCountry,
  addressConfirm,
  setUserStreet,
  setUsercity,
  setUserCountry,
  setAddressConfirm,
  street,
  city,
  country,
}) => {
  
  useEffect(() => {
    if (addressConfirm) {
      setUserStreet(street);
      setUsercity(city);
      setUserCountry(country);
    } else {
      setUserStreet('');
      setUsercity('');
      setUserCountry('');
    }
  }, [addressConfirm, street, city, country]);

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className="font-bold text-[26px] text-[#33495E]">Your Address / Location *</span>
        
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-[25px] h-[25px] form-checkbox text-blue-600"
            checked={addressConfirm}
            onChange={() => setAddressConfirm((prev) => !prev)}
          />
          <span className="font-bold text-[20px] text-[#33495E]">
            Same address as Job Location listed above
          </span>
        </label>

        <span className="font-bold text-[26px] text-[#33495E]">OR</span>

        <TextInput
          type="text"
          label="Street Name*"
          value={userStreet}
          onChange={(e) => setUserStreet(e.target.value)}
          style="w-full"
          disabled={addressConfirm} // Disable input when checkbox is checked
        />

        <TextInput
          type="text"
          label="City Zip*"
          value={userCity}
          onChange={(e) => setUsercity(e.target.value)}
          style="w-full"
          disabled={addressConfirm}
        />

        <TextInput
          type="text"
          label="Country*"
          value={userCountry}
          onChange={(e) => setUserCountry(e.target.value)}
          style="w-full"
          disabled={addressConfirm}
        />
      </Panel>
    </div>
  );
};

export default Address;
