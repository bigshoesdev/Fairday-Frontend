import { useState } from 'react';
import Panel from 'src/components/common/Panel';
import { useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BusinessYears = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {

  const handleSelection = (index) => {
    const selectedOption = businessYears[index];
    bufferSetBusinessProfileValue({ ...businessProfileValue, selectedBusinessYears: selectedOption._id });
  };

  const [open, setOpen] = useState(true);

  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const businessYears = GroupData.filter(item => item.category === 'businessYears');

  return (
    <div className="w-full">
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-2 shadow-lg'}>
        <p className='font-bold text-[20px]'>Years in Business  ( Optional )</p>
        <div className="relative w-full border border-gray-200 rounded-[10px]">
          <div className='items-center border-b border-gray-200 rounded-t-[10px] bg-white text-[#33495E] text-[26px] px-10 py-4 z-10 cursor-pointer relative flex justify-between items-start' onClick={() => setOpen(!open)}>
            <div>
              Select One
            </div>
            <p className=''>
              {open ? <ExpandMoreIcon fontSize="large" className="text-black" /> : <KeyboardArrowRightIcon fontSize="large" className="text-black" />}
            </p>
          </div>
          <div
            className={`bg-gray-100 left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[2000px]" : "max-h-0"}`}
          >
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {businessYears.map((option, index) => (
                <div
                  key={index}
                  className={`text-center rounded-lg p-4 cursor-pointer ${businessProfileValue.selectedBusinessYears === option._id ? 'bg-primaryBlue text-white' : 'bg-white text-primaryBlue'
                    }`}
                  onClick={() => handleSelection(index)}
                >
                  {option.string.trim()}
                </div>
              ))}
            </div>

          </div>
        </div>
      </Panel>
    </div>
  );
};

export default BusinessYears;
