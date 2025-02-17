import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const AdditionalJobDetail = ({ jobValue, bufferSetJobValue }) => {

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
              name="specification"
              label="text here"
              value={jobValue.specification}
              rows={4}
              multiline={true}
              onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
              style="w-full"
            />
          </div>

          <div>
            <span className='semi-bold'>Schedules</span>
            <TextInput
              name="schedules"
              type="email"
              label="text here"
              value={jobValue.schedules}
              rows={4}
              multiline={true}
              onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
              style="w-full"
            />
          </div>

          <div>
            <span className='semi-bold'>Legal Agreements Requiring Authorization</span>
            <TextInput
              name="agreements"
              type="email"
              label="text here"
              value={jobValue.agreements}
              rows={4}
              multiline={true}
              onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
              style="w-full"
            />
          </div>

          <div>
            <span className='semi-bold'>Add Notes</span>
            <TextInput
              name="note"
              type="email"
              label="text here"
              value={jobValue.note}
              rows={4}
              multiline={true}
              onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
              style="w-full"
            />
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default AdditionalJobDetail;
