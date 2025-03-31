import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const BusinessInsurance = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className='font-bold text-[18px]'>Business insurance*</span>
        <div className='flex flex-row gap-8'>
          <label className="flex items-center space-x-5 ">
            <input
              type="radio"
              name="businessInsurance"
              value="yes"
              checked={businessProfileValue.businessInsurance === 'yes'}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <span className="font-bold text-[15px] sm:text-[18px] text-gray-600 flex flex-row items-center">
              Yes
            </span>
          </label>

          <label className="flex items-center space-x-5 ">
            <input
              type="radio"
              name="businessInsurance"
              value="no"
              checked={businessProfileValue.businessInsurance === 'no'}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <span className="font-bold text-[15px] sm:text-[18px] text-gray-600 flex flex-row items-center">
              No
            </span>
          </label>
        </div>

        <span className='font-bold text-[18px]'>Workmans insurance</span>
        <div className='flex flex-row gap-8'>
          <label className="flex items-center space-x-5 ">
            <input
              type="radio"
              name="workmansInsurance"
              value="yes"
              checked={businessProfileValue.workmansInsurance === 'yes'}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <span className="font-bold text-[15px] sm:text-[18px] text-gray-600 flex flex-row items-center">
              Yes
            </span>
          </label>

          <label className="flex items-center space-x-5 ">
            <input
              type="radio"
              name="workmansInsurance"
              value="no"
              checked={businessProfileValue.workmansInsurance === 'no'}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <span className="font-bold text-[15px] sm:text-[18px] text-gray-600 flex flex-row items-center">
              No
            </span>
          </label>
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Other Insureance ( Optional )</span>
          <TextInput
            type="email"
            name="insurance"
            label="Write Here..."
            value={businessProfileValue.insurance}
            rows={3}
            multiline={true}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: e.target.value })}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default BusinessInsurance;
