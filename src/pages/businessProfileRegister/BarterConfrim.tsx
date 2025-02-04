import Panel from 'src/components/common/Panel';

const BarterConfrim = ({ barterConfirm, setBarterConfirm}) => {

  return (
    <div className='w-full'>
          <Panel classStyle="flex flex-row px-10 py-10 bg-white rounded-2xl gap-5 shadow-xl justify-between">
            <label className="flex items-center space-x-5 ">
              <input
                type="checkbox"
                className="w-[24px] h-[24px] form-checkbox text-blue-600"
              checked={barterConfirm}
              onChange={() => setBarterConfirm((prev) => !prev)}
              />
              <span className="font-bold text-[18px] text-gray-600 flex flex-row items-center">
              Barter or Trade Accepted
              </span>
            </label>
          </Panel>
        </div>
  );
};

export default BarterConfrim;
