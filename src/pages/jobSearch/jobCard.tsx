const JobCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full">
      <div className="flex items-start mb-4">
        <div className="w-[55px] h-[55px] bg-gray-200 rounded-full flex-shrink-0">
            <img src="src/assets/images/avatar.png" className="w-[55px] h-[55px]" alt="Company Avatar" />
        </div>
        <div className="ml-4">
          <h2 className="text-[22px] font-semibold text-gray-800">
            Airplane Mechanical Technician
          </h2>
          <span className="font-semibold text-gray-400">Requirements:</span>{" "}
          <span className="font-bold text-black mr-4">Certification FFA</span>
          <span className="font-semibold text-gray-400">Employment Type:</span>{" "}
          <span className="font-bold text-black mr-4">Full-Time</span>
          <span className="font-semibold text-gray-400">Pay:</span>{" "}
          <span className="font-bold text-black mr-4">$85.00/hr</span>
          <span className="font-semibold text-gray-400">Currency:</span>{" "}
          <span className="font-bold text-black mr-4">USD</span>
          <p className="mt-2">
            <span className="font-semibold text-blue-600">
              Air Trans Global Inc.
            </span>
            <span className="ml-2 mr-2">|</span>
            <span className="font-semibold text-black">LaGuardia, NY</span>
            <span className="ml-2 mr-2">|</span>
            <span className="font-semibold text-black">
              Commercial Employer
            </span>
          </p>
          <div className="mb-4">
            <p className="text-gray-500 text-[16px]">
              Experience working remotely in similar roles strongly preferred:
              Minimum 5 years participating in the complete software lifecycle
              process for ...
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-[15px] text-gray-600 mr-2">4.5</span>
              <span className="text-yellow-400 text-[22px]">&#9733;</span>
              <span className="text-yellow-400 text-[22px]">&#9733;</span>
              <span className="text-yellow-400 text-[22px]">&#9733;</span>
              <span className="text-yellow-400 text-[22px]">&#9733;</span>
              <span className="text-gray-400 text-[22px]">&#9733;</span>
              <span className="ml-3 text-[15px] text-gray-400">Based on 3 Reviews</span>
            </div>
            <span className="text-[15px] text-gray-500">5 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
