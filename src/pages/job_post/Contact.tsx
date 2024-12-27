import { useState } from 'react';
import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import RadioLabel from 'src/components/common/RadioLabel';

const Contact = () => {

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
            <span className='text-[#1880F1] text-[22px] font-bold'>Employer Preferred Method of Contact</span>
            <span className='text-black text-[22px]'>Keep Contact info Private (Verified and Rated Applicants only)</span>

          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          <RadioLabel
            label="Keep Contact info Private (Verified & Rated Applicants Only via masked email by FAIRDAY JOBS)"
            checked={addressConfirm}
            onChange={addressConfirmChange}
            labelClass="pr-[150px]"
          />

          <RadioLabel
            label="Publish the following Contact preferences with Job Post (Make Public for a broader range of applicant responses)"
            checked={addressConfirm}
            onChange={addressConfirmChange}
            labelClass="pr-[150px]"
          />

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Telephone"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Email"
              checked={addressConfirm}
              spanClass='min-w-[120px]'
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

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Facebook"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Instagram"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Linkedin"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Skype"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Whats App"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className='flex flex-row gap-4'>
            <RadioLabel
              label="Other"
              checked={addressConfirm}
              onChange={addressConfirmChange}
              spanClass='min-w-[120px]'
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>


        </div>

      </DropPanel>
    </div>
  );
};

export default Contact;
