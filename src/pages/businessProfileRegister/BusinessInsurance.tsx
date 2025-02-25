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
              name="businessInsuranceYes"
              type="checkbox"
              className="w-[24px] h-[24px] form-checkbox text-blue-600"
              checked={businessProfileValue.businessInsuranceYes}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
            />
            <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
              Yes
            </span>
          </label>

          <label className="flex items-center space-x-5 ">
            <input
              name="businessInsuranceNo"
              type="checkbox"
              className="w-[24px] h-[24px] form-checkbox text-blue-600"
              checked={businessProfileValue.businessInsuranceNo}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
            />
            <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
              No
            </span>
          </label>
        </div>

        <span className='font-bold text-[18px]'>Workmans insurance</span>
        <div className='flex flex-row gap-8'>
          <label className="flex items-center space-x-5 ">
            <input
              name="workmansInsuranceYes"
              type="checkbox"
              className="w-[24px] h-[24px] form-checkbox text-blue-600"
              checked={businessProfileValue.workmansInsuranceYes}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
            />
            <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
              Yes
            </span>
          </label>

          <label className="flex items-center space-x-5 ">
            <input
              name="workmansInsuranceNo"
              type="checkbox"
              className="w-[24px] h-[24px] form-checkbox text-blue-600"
              checked={businessProfileValue.workmansInsuranceNo}
              onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
            />
            <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
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
