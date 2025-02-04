import { useState } from 'react';
import HeaderBanner from "./headerBanner";
import JobDetail from "./jobDetail";
import JobPanel from "./jobPanel";
import SpecialJobDetail from "./specialJobDetail";
import ApplyTap from 'src/pages/publishAd/ApplyTap';

const PublishAd = () => {

  const [activeModal, setActiveModal] = useState(false);

 const handleOpenModal = () => {
  setActiveModal(true)
 }
  const closeModal = () => {
    setActiveModal(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const ApplyClicked = () => {
    handleOpenModal()
  };


  return (
    <div className="w-full items-center flex flex-col bg-blue-50">
      <HeaderBanner />
      <JobPanel
      ApplyClicked={ApplyClicked}
      />
      <JobDetail/>
      <SpecialJobDetail/>

      {activeModal && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-[20px] shadow-md w-[500px]">
            {activeModal && <ApplyTap  closeModal={closeModal} />}
          </div>
        </div>
      )}

      
    </div>
  );
};
export default PublishAd;
