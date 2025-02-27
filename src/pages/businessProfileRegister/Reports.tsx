import Panel from 'src/components/common/Panel';
import { useSelector } from 'react-redux';
import CheckboxLable from 'src/components/common/CheckboxLable';
import TextInput from 'src/components/common/TextInput';
import Button from 'src/components/common/Button';
import { BsThreeDotsVertical } from "react-icons/bs";

const Reports = ({ businessProfileValue, bufferSetBusinessProfileValue }) => {
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const applicantTypeData = GroupData.filter(item => item.category === 'certificateReports');

  const handleCheckboxChange = (itemId) => {
    const updatedReports = businessProfileValue.preScreeningReports || [];
    const exists = updatedReports.some(report => report.itemId === itemId);

    bufferSetBusinessProfileValue({
      ...businessProfileValue,
      preScreeningReports: exists
        ? updatedReports.filter(report => report.itemId !== itemId)
        : [...updatedReports, { itemId, itemName: '', link: '' }]
    });
  };

  const handleUpload = (itemId, itemName) => {
    if (businessProfileValue.link) {
      const updatedReports = (businessProfileValue.preScreeningReports || []).map(report =>
        report.itemId === itemId ? { ...report, itemName, link: businessProfileValue.link } : report
      );

      bufferSetBusinessProfileValue({
        ...businessProfileValue,
        preScreeningReports: updatedReports,
        link: ''
      });
    }
  };

  return (
    <div className='w-full'>
      <Panel classStyle="flex flex-col px-10 py-10 bg-white rounded-2xl gap-5 shadow-xl justify-between">
        <div className='font-bold text-[18px]'>Certificates, Licenses & Reports (Optional)</div>
        <div className='flex flex-col gap-4'>
          {applicantTypeData.map((item) => {
            const isChecked = (businessProfileValue.preScreeningReports || []).some(report => report.itemId === item._id);
            const uploadedItem = (businessProfileValue.preScreeningReports || []).find(report => report.itemId === item._id);
            
            return (
              <div className='flex flex-row justify-between' key={item._id}>
                <CheckboxLable
                  label={item.string}
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(item._id)}
                />
                <div className='flex flex-row items-center gap-1'>
                  <Button
                    text={uploadedItem?.link ? "UPLOADED" : "UPLOAD"}
                    onClick={() => handleUpload(item._id, item.string)}
                    className={`text-white text-[12px] sm:text-[16px] font-medium hover:bg-blue-400 transition-all cursor-pointer focus:outline-none rounded-lg ${isChecked ? 'bg-primaryBlue hover:bg-blue-400' : 'bg-gray-300 cursor-not-allowed'} ${uploadedItem?.link ? 'bg-red-500' : ''}`}
                    disable={!isChecked || !businessProfileValue.link}
                  />
                  <BsThreeDotsVertical />
                </div>
              </div>
            );
          })}
        </div>

        <TextInput
          type="text"
          name="link"
          label="Type Your Link Here"
          value={businessProfileValue.link || ''}
          onChange={(e) => bufferSetBusinessProfileValue({ ...businessProfileValue, link: e.target.value })}
          style="w-full"
        />

        <div className="mt-4">
          {(businessProfileValue.preScreeningReports || []).map((uploadedItem) => (
            <div key={uploadedItem.itemId} className="flex justify-between">
              <span>{uploadedItem.itemName}: {uploadedItem.link}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
};

export default Reports;
