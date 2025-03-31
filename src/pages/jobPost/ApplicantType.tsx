import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import DropPanel from 'src/components/common/DropPanel';
import CheckboxLable from 'src/components/common/CheckboxLable';
import { getJobConstManage } from 'src/store/user/jobSlice';

const ApplicantType = ({ jobValue, bufferSetJobValue }) => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const GroupData = jobConfig.jobConstManage;
  const applicantTypeData = GroupData.filter(item => item.category === 'applicanttype');

  const handleCheckboxChange = (label: string) => {
    bufferSetJobValue({
      ...jobValue, checkboxStates: {
        ...jobValue.checkboxStates,
        [label]: !jobValue.checkboxStates[label]
      }
    })
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
          <div className='flex flex-col gap-2'>
            <span className='text-[#1880F1] sm:text-[26px] text-[20px] font-bold'>Applicant Type* <span className='text-black font-normal'>(Select all as applicable)</span></span>
            <div className='flex justify-start items-center flex-wrap'>
              {
                Object
                  .keys({ ...jobValue.checkboxStates })
                  .filter((key: any) => jobValue.checkboxStates[key] === true)
                  .map((key: any, order: any) =>
                    <div key={order} className='px-8 py-2 rounded-[6px] bg-blue-500 text-white mb-1 mr-1'>
                      {applicantTypeData.find((item: any) => item._id === key)?.string}
                    </div>
                  )
              }
            </div>
          </div>
        }
      >
        <div className='flex flex-col gap-4 max-h-80 overflow-y-auto'>
          {applicantTypeData.map((item) => (
            <CheckboxLable
              key={item._id}
              label={item.string}
              checked={jobValue.checkboxStates[item._id] || false}
              onChange={() => handleCheckboxChange(item._id)}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default ApplicantType;
