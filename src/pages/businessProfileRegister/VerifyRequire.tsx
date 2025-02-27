import Panel from 'src/components/common/Panel';
import { MdVerifiedUser } from "react-icons/md";

const VerifyRequire = ({
  businessProfileValue, bufferSetBusinessProfileValue
}) => {

  return (
    <div className='w-full'>
      <Panel classStyle="flex flex-row px-8 py-8 sm:px-10 sm:py-10 bg-white rounded-2xl shadow-xl justify-between">
        <label className="flex items-center space-x-5 ">
          <input
            name="verifyRequireConfirm"
            type="checkbox"
            className="w-[24px] h-[24px] form-checkbox text-blue-600"
            checked={businessProfileValue.verifyRequireConfirm}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
          />
          <span className="font-bold text-[15px] sm:text-[18px] text-gray-600 flex flex-row items-center">
            Get Identification Verified
          </span>
        </label>
        <div>
          <div className='flex flex-row items-center gap-x-3'>
            <MdVerifiedUser className='text-blue-500 w-[30px] h-[30px] ml-3' /> <span className='ml-1 text-[15px] sm:text-[18px]'>(Optional)</span>
            <span className='font-bold text-black text-[15px] sm:text-[25px] text-center'>$ 75</span>
          </div>

        </div>
      </Panel>
    </div>
  );
};

export default VerifyRequire;
