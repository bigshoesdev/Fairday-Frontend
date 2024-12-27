import { useState } from 'react';
import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import RadioLabel from 'src/components/common/RadioLabel';

const YearsExperience = () => {

  const [addressConfirm, setAddressConfirm] = useState<boolean>(false);

  const addressConfirmChange = () => {
    setAddressConfirm(!addressConfirm);
  };

  const [email, setEmail] = useState('');

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] text-[22px] font-bold'>Years of Experience Preferred</span>
            <span className='text-black text-[22px]'>0-1 Yr</span>

          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          <RadioLabel
            label="0-1 yr"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="2-5 yrs"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="5-10 yrs"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Certified"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="10+ yrs"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Other Job"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <SmallTextInput
            type="email"
            label="Description text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style="left-7 w-1/2"
          />

        </div>

      </DropPanel>
    </div>
  );
};

export default YearsExperience;
