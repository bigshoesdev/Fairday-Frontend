import Panel from 'src/components/common/Panel';

const BarterConfrim = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle="flex flex-row px-10 py-10 bg-white rounded-2xl gap-5 shadow-xl justify-between">
        <label className="flex items-center space-x-5 ">
          <input
            name="barterConfirm"
            type="checkbox"
            className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] form-checkbox text-blue-600"
            checked={businessProfileValue.barterConfirm}
            onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, [e.target.name]: !businessProfileValue[e.target.name] })}
          />
          <span className="font-bold text-[15px] sm:text-[18px] text-gray-600 flex flex-row items-center">
            Barter or Trade Accepted
          </span>
        </label>
      </Panel>
    </div>
  );
};

export default BarterConfrim;
