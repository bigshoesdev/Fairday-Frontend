// DesktopHeader.tsx
import React, { useState } from 'react';
import layoutMenuList from 'src/mock/layoutMenuList.json';
import SignUp from 'src/pages/SignUp';
import Login from 'src/pages/Login';

const DesktopHeader: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);

  const handleOpenModal = (modalType: 'login' | 'register') => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const switchToRegister = () => {
    setActiveModal('register');
  };

  const switchToLogin = () => {
    setActiveModal('login');
  };

  return (
    <div className="hidden header_change:block">
      <div className="flex justify-between items-center">
        <a href="http://localhost:5173/">
          <img
            src="http://localhost:5173/src/assets/images/logo.png"
            className="w-[210px] h-[36px] border border-red-500 cursor-pointer"
          />
        </a>

        <div className="flex justify-start items-center">
          {layoutMenuList.header.map((item, index) => (
            <a href={item.link}>
              <p
                key={index}
                className="text-[15px] mb-0 px-5 text-primaryGray hover:text-white border-r-[1px] border-primaryGray cursor-pointer h-[18px] transition-all"
              >
                {item.menu}
              </p>
            </a>

          ))}
          <p
            onClick={() => handleOpenModal('login')}
            className="text-[15px] px-5 mb-0 text-white font-bold hover:text-blue-300 border-r-[1px] border-primaryGray cursor-pointer transition-all"
          >
            Login
          </p>
          <p
            onClick={() => handleOpenModal('register')}
            className="text-[15px] px-5 mb-0 text-white font-bold hover:text-blue-300 border-r-[1px] border-primaryGray cursor-pointer transition-all"
          >
            Register
          </p>

          <img
            src="http://localhost:5173/src/assets/images/fb_header.png"
            className="ml-10 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
          <img
            src="http://localhost:5173/src/assets/images/ig_header.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
          <img
            src="http://localhost:5173/src/assets/images/x_header.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
          <img
            src="http://localhost:5173/src/assets/images/linkedin.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-[20px] shadow-md w-[600px]">
            {activeModal === 'login' && <Login switchToRegister={switchToRegister} />}
            {activeModal === 'register' && <SignUp switchToLogin={switchToLogin} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopHeader;
