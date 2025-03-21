const JobDetail = ({ jobDeati }: any) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-5 px-10 rounded-lg mt-5 mb-10 shadow-lg overflow-hidden">
      <p className="text-[30px] font-semibold">Job Details</p>
      <p className="text-[20px] font-bold mb-1">Business address</p>
      <p className="text-[14px] font-medium text-gray-500 mb-1">Air Trans Global Inc. 101 Runway Rd. Laguardia, NY 12345</p>
      <p className="text-[20px] font-bold mb-1">Years in business</p>
      <p className="text-[14px] font-medium text-gray-500 mb-1">3 years</p>
      <p className="text-[20px] font-bold mb-1">Work schedule</p>
      <p className="text-[14px] font-medium text-gray-500 mb-1">M-F 8am - 4pm</p>
      <p className="text-[20px] font-bold mb-1">Payment method</p>
      <p className="text-[14px] font-medium text-gray-500 mb-1">Business Check</p>
      <p className="text-[20px] font-bold mb-1">Payment frequency</p>
      <p className="text-[14px] font-medium text-gray-500 mb-1">3 months</p>
    </div>
  );
};
export default JobDetail;
