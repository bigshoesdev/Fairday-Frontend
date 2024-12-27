import { useState } from 'react';
import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import RadioLabel from 'src/components/common/RadioLabel';

const JobType = () => {

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
            <span className='text-[#1880F1] text-[22px] font-bold'>Job Type* <span className='text-black font-normal'>(Select as applicable - one required)</span></span>
            <span className='text-black text-[22px]'>One Time Service or Per Service</span>

          </div>
        }
      >
        <div className='flex flex-col gap-4'>
          <RadioLabel
            label="One Time Service or Per Service"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Part Time with text insert __ Hrs per Week __ Hrs per Month"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <div className='flex flex-row items-center gap-3'>
            <SmallTextInput
              type="email"
              label=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="w-1/5"
            />
            <span className=''>Hrs/week</span>
            <SmallTextInput
              type="email"
              label=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="w-1/5"
            />
            <span className=''>Hrs/month</span>
          </div>

          <RadioLabel
            label="Full Time"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Temporary Job & Duration"
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

          <RadioLabel
            label="Salaried Job"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Entry Level"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="With Job Benefits"
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

          <RadioLabel
            label="Contract Job"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Job with Sales Commission"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Gigs"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Cash & Tips"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Job Paid Per Piece or Units of goods Produced"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Paid Materials Plus Labor"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Job Open for Bid, Proposal or Estimate"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Paid Materials Plus Labor"
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

          <RadioLabel
            label="Job for Barter or Trade & Trade Offer"
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

          <RadioLabel
            label="Hourly with text insert __ Minimum Hours per day or Shift"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <div className='flex flex-row items-center'>
            <SmallTextInput
              type="email"
              label=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style="left-7 w-1/5"
            />
            <span className='ml-10'>Hrs/day</span>
            
          </div>

          <RadioLabel
            label="Job suitable for Senior Citizens"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Job suitable for Handicap/limited mobility"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Remote Job ( work from home )"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Services Wanted"
            checked={addressConfirm}
            onChange={addressConfirmChange}
          />

          <RadioLabel
            label="Job for Charity"
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

export default JobType;
