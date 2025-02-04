import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const AdditionalJobDetail = ({ specification, setSpecification, schedules, setSchedules, agreements, setAgreements, note, setNote }) => {


  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <span className="font-bold text-[26px] text-[#1880F1]">
          Adiitional Special Job Details</span>
        <div className='p-5 flex flex-col gap-5'>
          <div>
            <span className='semi-bold'>Specification</span>
            <TextInput
              type="email"
              name="email"
              label="text here"
              value={specification}
              rows={4}
              multiline={true}
              onChange={(e) => setSpecification(e.target.value)}
              style="w-full"
            />
          </div>

          <div>
            <span className='semi-bold'>Schedules</span>
            <TextInput
              name="email"
              type="email"
              label="text here"
              value={schedules}
              rows={4}
              multiline={true}
              onChange={(e) => setSchedules(e.target.value)}
              style="w-full"
            />
          </div>

          <div>
            <span className='semi-bold'>Legal Agreements Requiring Authorization</span>
            <TextInput
              name="email"
              type="email"
              label="text here"
              value={agreements}
              rows={4}
              multiline={true}
              onChange={(e) => setAgreements(e.target.value)}
              style="w-full"
            />
          </div>

          <div>
            <span className='semi-bold'>Add Notes</span>
            <TextInput
              name="email"
              type="email"
              label="text here"
              value={note}
              rows={4}
              multiline={true}
              onChange={(e) => setNote(e.target.value)}
              style="w-full"
            />
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default AdditionalJobDetail;
