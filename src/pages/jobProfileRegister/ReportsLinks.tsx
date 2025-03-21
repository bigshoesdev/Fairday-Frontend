// import Panel from 'src/components/common/Panel';
// import { useState } from 'react'
// import { useSelector } from 'react-redux';
// import CheckboxLable from 'src/components/common/CheckboxLable';
// import TextInput from 'src/components/common/TextInput';
// import Button from 'src/components/common/Button';
// import { BsThreeDotsVertical } from "react-icons/bs";

// const ReportsLinks = ({ checkboxStates, setCheckboxStates, link, setLink }) => {
//   const { jobConfig } = useSelector((state: any) => state);
//   const GroupData = jobConfig.jobConstManage;
//   const applicantTypeData = GroupData.filter(item => item.category === 'reportsLink');
  
//   const [uploadedItems, setUploadedItems] = useState([]); // To store uploaded items

//   const handleCheckboxChange = (label: string) => {
//     setCheckboxStates((prevState) => ({
//       ...prevState,
//       [label]: !prevState[label],
//     }));
//   };

//   const buttonClick = (itemId: string, itemName: string) => {
//     if (link) { // Only allow upload if the link is provided
//       setUploadedItems(prevItems => [
//         ...prevItems, 
//         { itemId, itemName, link }
//       ]);
//       setLink(''); // Reset the link input
//     }
//   }

//   return (
//     <div className='w-full'>
//       <Panel classStyle="flex flex-col px-10 py-10 bg-white rounded-2xl gap-5 shadow-xl justify-between">
//         <div className='font-bold text-[18px]'>Pre-Screening Reports links (Optional)</div>
//         <div className='flex flex-col gap-4'>
//           {applicantTypeData.map((item) => (
//             <div className='flex flex-row justify-between' key={item._id}>
//               <CheckboxLable
//                 label={item.string} // Display the string value for each checkbox
//                 checked={checkboxStates[item._id] || false} // Check if the checkbox is selected
//                 onChange={() => handleCheckboxChange(item._id)} // Toggle the checkbox
//               />
//               <div className='flex flex-row items-center gap-1'>
//                 <Button
//                   text={uploadedItems.some(uploadedItem => uploadedItem.itemId === item._id) ? "UPLOADED" : "UPLOAD"}
//                   onClick={() => buttonClick(item._id, item.string)}
//                   className={`text-white text-[16px] font-medium hover:bg-blue-400 transition-all cursor-pointer focus:outline-none rounded-xl ${checkboxStates[item._id] ? 'bg-primaryBlue hover:bg-blue-400' : 'bg-gray-300 cursor-not-allowed'} ${uploadedItems.some(uploadedItem => uploadedItem.itemId === item._id) ? 'bg-red-500' : ''}`}
//                   disable ={!checkboxStates[item._id] || !link} // Disable upload if checkbox isn't selected or link is empty
//                 />
//                 <BsThreeDotsVertical />
//               </div>
//             </div>
//           ))}
//         </div>

//         <TextInput
//           type="email"
//           name="email"
//           label="Type Your Link Here"
//           value={link}
//           onChange={(e) => setLink(e.target.value)}
//           style="w-full"
//         />

//         <div className="mt-4">
//           {uploadedItems.map((uploadedItem) => (
//             <div key={uploadedItem.itemId} className="flex justify-between">
//               <span>{uploadedItem.itemName}: {uploadedItem.link}</span>
//             </div>
//           ))}
//         </div>
//       </Panel>
//     </div>
//   );
// };

// export default ReportsLinks;

import Panel from 'src/components/common/Panel';
import { useSelector } from 'react-redux';
import CheckboxLable from 'src/components/common/CheckboxLable';
import TextInput from 'src/components/common/TextInput';
import Button from 'src/components/common/Button';
import { BsThreeDotsVertical } from "react-icons/bs";

const ReportsLinks = ({ appProfileValue, bufferSetAppProfileValue }) => {
  const { jobConfig } = useSelector((state: any) => state);
  const GroupData = jobConfig.jobConstManage;
  const applicantTypeData = GroupData.filter(item => item.category === 'reportsLink');

  const handleCheckboxChange = (itemId: string) => {
    const updatedReports = appProfileValue.preScreeningReports || [];
    const exists = updatedReports.some(report => report.itemId === itemId);

    bufferSetAppProfileValue({
      ...appProfileValue,
      preScreeningReports: exists
        ? updatedReports.filter(report => report.itemId !== itemId)
        : [...updatedReports, { itemId, itemName: '', link: '' }]
    });
  };

  const handleUpload = (itemId: string, itemName: string) => {
    if (appProfileValue.link) {
      const updatedReports = (appProfileValue.preScreeningReports || []).map(report =>
        report.itemId === itemId ? { ...report, itemName, link: appProfileValue.link } : report
      );

      bufferSetAppProfileValue({
        ...appProfileValue,
        preScreeningReports: updatedReports,
        link: '' 
      });
    }
  };

  return (
    <div className='w-full'>
      <Panel classStyle="flex flex-col px-10 py-10 bg-white rounded-2xl gap-5 shadow-xl justify-between">
        <div className='font-bold text-[18px] sm:text-[20px]'>Pre-Screening Reports Links (Optional)</div>
        <div className='flex flex-col gap-4'>
          {applicantTypeData.map((item) => {
            const isChecked = (appProfileValue.preScreeningReports || []).some(report => report.itemId === item._id);
            const uploadedItem = (appProfileValue.preScreeningReports || []).find(report => report.itemId === item._id);
            
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
                    disable={!isChecked || !appProfileValue.link}
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
          value={appProfileValue.link || ''}
          onChange={(e) => bufferSetAppProfileValue({ ...appProfileValue, link: e.target.value })}
          style="w-full"
        />

        <div className="mt-4">
          {(appProfileValue.preScreeningReports || []).filter((item: any) => item.itemName !== "").map((uploadedItem) => (
            <div key={uploadedItem.itemId} className="flex justify-between">
              <span>{uploadedItem.itemName}: {uploadedItem.link}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
};

export default ReportsLinks;
