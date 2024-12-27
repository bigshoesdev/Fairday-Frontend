import React, { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const JobLocation = () => {

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow-lg'}>

        <span className='text-[26px] font-bold text-[#33495E]'>Job Location*</span>

        <TextInput
          type="email"
          label="Street Name*"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          style="w-full"
        />

        <TextInput
          type="email"
          label="City Zip*"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style="w-full"
        />

        <TextInput
          type="email"
          label="Country*"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style="w-full"
        />

        <span className='text-[26px] font-bold text-[#33495E]'>Pinpoint Map Location (Optional)</span>
        <img src="src/assets/images/pin_map.png"></img>

      </Panel>
    </div>
  );
};

export default JobLocation;
