import { useState } from 'react';
import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import CheckboxLable from 'src/components/common/CheckboxLable';

const ApplicantType = () => {

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
            <span className='text-[#1880F1] text-[22px] font-bold'>Applicant Type* <span className='text-black font-normal'>(Select all as applicable)</span></span>
            <span className='text-black text-[22px]'>Skilled</span>

          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          <CheckboxLable
            label="Unskilled/Trainee"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <CheckboxLable
            label="Skilled"
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

export default ApplicantType;
