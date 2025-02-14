import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import React, { useState, useRef, useEffect } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useSelector } from "react-redux";
import StarRating from "src/components/common/StarRating";

const DraggableModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { jobConfig } = useSelector((state: any) => state);
  const { jobDetails, jobConstManage } = jobConfig;



  const jobTypes = jobConstManage.filter(item => item.category === 'jobtype');
console.log('jobDetails', jobDetails);


  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [rating, setRating] = useState<number>(4.5);

  useEffect(() => {
    // Center the modal when it opens
    if (modalRef.current) {
      const modalWidth = modalRef.current.offsetWidth;
      const modalHeight = modalRef.current.offsetHeight;
      setPosition({
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2 - 50,
      });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!modalRef.current) return;
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100] ">
      <div
        ref={modalRef}
        className="absolute w-[600px] px-1 pt-3 pb-1 rounded-lg shadow-lg cursor-move bg-blue-500 flex flex-col"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex justify-between items-center px-8">
          <span className="text-[18px] text-white font-semibold">Job Preveiw</span>
          <span onClick={onClose} className="text-white text-[40px] bg-blue-500 cursor-pointer font-thin">×</span>
        </div>

        <div className="bg-white rounded-lg py-5 px-8 flex flex-col">
          <div className="flex flex-col">
            <span className="font-bold text-[18px]">{jobDetails?.result?.jobTitle || ''}</span>
            <span className="text-[15px]">Requirements: Certification FAA</span>
          </div>

          <div className="mt-4 flex flex-row gap-4">
            <img src="src/assets/images/job_location.png" className="w-16 h-16"></img>
            <div className="flex flex-col">
              <span className="text-blue-400 font-bold">{jobDetails?.result?.employer || ''}</span>
              <span className="text-black font-bold">{jobDetails?.result?.street || ''}</span>
              <span className="text-gray-500">Commerical Employer</span>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-3 font-bold">
            <span>Job Description</span>


            <span>{jobTypes.find((each) => each._id === jobDetails?.result?.selectedJobType)?.string || ''}<span className="ml-2">85.00/Hr</span></span>
          </div>

          <div className="flex justify-between items-end mt-3">
            <span className="text-[15px] text-gray-500">
              {jobDetails?.result?.jobDescription.length > 250
                ? `${jobDetails?.result?.jobDescription.slice(0, 250)}...`
                : jobDetails?.result?.jobDescription}
            </span>
            <div className="flex flex-row ml-6">
              <MdOutlineVerifiedUser className="text-blue-500 text-[20px]" />
              <span className="ml-2 text-[15px] font-semibold text-gray-500">Verified</span>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-rows items-center gap-x-3">
              <span className="font-semibold text-[15px]">Rating</span>
              <StarRating rating={rating} />
              <span className="font-semibold text-[15px]">{rating} starts</span>
            </div>
            <span className="text-gray-500 text-[15px] font-medium">{dayjs(jobDetails?.result?.createdAt).fromNow() || ''}</span>
          </div>

          <span className="mt-1 text-[13px] text-gray-500">(3 Reviews)</span>

          <hr className="border-[1px] mt-6"></hr>

          <div className="mt-4 flex flex-row gap-4 overflow-x-auto ">
            <img src="src/assets/images/banner1.png" className="w-20 h-20 rounded-lg"></img>
            <img src="src/assets/images/banner2.png" className="w-20 h-20 rounded-lg"></img>
            <img src="src/assets/images/banner4.png" className="w-20 h-20 rounded-lg"></img>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DraggableModal;
