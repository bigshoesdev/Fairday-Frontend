import Panel from 'src/components/common/Panel';
import { MdVerifiedUser } from "react-icons/md";

const VerifyRequire = ({
  appProfileValue,
  bufferSetAppProfileValue,
}) => {

  return (
    <div className='w-full'>
      <Panel classStyle="flex flex-row px-10 py-10 bg-white rounded-2xl gap-5 shadow-xl justify-between">
        <label className="flex items-center space-x-5 ">
          <input
          name="verifyRequiredConfirm"
            type="checkbox"
            className="w-[24px] h-[24px] form-checkbox text-blue-600"
            checked={appProfileValue.verifyRequiredConfirm}
            onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, [e.target.name]: !appProfileValue[e.target.name] })}
          />
          <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
            Get Identification Verified <MdVerifiedUser className='text-blue-500 w-[30px] h-[30px] ml-3' /> <span className='ml-1 font-normal'>(Optional)</span>
          </span>
        </label>
        <span className='font-bold text-black text-[25px]'>$ 10</span>
      </Panel>
    </div>
  );
};

export default VerifyRequire;
