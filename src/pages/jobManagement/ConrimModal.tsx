import React, { useState } from 'react';
import { changeJob } from 'src/store/user/jobSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';

const ConfirmModal = ({ isOpen, onClose, job }) => {
    const dispatch = useDispatch<AppDispatch>();
    if (!isOpen) return null;

    const yesButtonClick = () => {
       
        onClose;
        const jobId = job._id;
        const status = 3; 
        dispatch(changeJob({ jobId, status }));
        
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[50]">
            <div className="bg-white p-6 rounded shadow-lg">
                <p className="mb-4 text-[24px]">Do you confirm end job?</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => yesButtonClick()}
                        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal