import Panel from 'src/components/common/Panel';

const WorkHistofyDetail = ({

}) => {

  return (
    <div className='w-full'>
          <Panel classStyle="flex flex-row bg-white rounded-2xl shadow-lg justify-between py-2 items-center">
            <span className='font-bold  pl-10 text-[20px]'>Work history detail</span>
            <div className='border boder-red-500 w-[60px] h-[80px] bg-blue-500 rounded-lg mr-2 text-center flex items-center justify-center text-white text-[30px]'>
              +
            </div>
          </Panel>
        </div>
  );
};

export default WorkHistofyDetail;
