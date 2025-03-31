const JobDetail = ({ jobDeatil, jobConstManage }: any) => {
  
  const businessYears = jobConstManage.filter((item: any) => item._id === jobDeatil.selectedBusinessYears);
  const paymentMethod = jobConstManage.filter((item: any) => item._id === jobDeatil.selectedPayment);
  const paymentFrequency = jobConstManage.filter((item: any) => item._id === jobDeatil.selectedEmployPayment);
  

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-5 px-10 rounded-lg mt-5 mb-10 shadow-lg overflow-hidden">
      <p className="text-[30px] font-semibold">Job Details</p>
      <p className="text-[20px] font-bold mb-1">Business address</p>
      <p className="text-[18] font-medium text-gray-500 mb-1 min-h-4">{jobDeatil?.country} {jobDeatil?.street} {jobDeatil?.city}</p>
      <p className="text-[20px] font-bold mb-1">Years in business</p>
      <p className="text-[18] font-medium text-gray-500 mb-1 min-h-4">{businessYears[0]?.string || ''}</p>
      <p className="text-[20px] font-bold mb-1">Work schedule</p>
      <p className="text-[18] font-medium text-gray-500 mb-1 min-h-4">{jobDeatil?.schedule || ''}</p>
      <p className="text-[20px] font-bold mb-1">Payment method</p>
      <p className="text-[18] font-medium text-gray-500 mb-1 min-h-4">{paymentMethod[0]?.string || ''}</p>
      <p className="text-[20px] font-bold mb-1">Payment frequency</p>
      <p className="text-[18] font-medium text-gray-500 mb-1 min-h-4">{paymentFrequency[0]?.string}</p>
    </div>
  );
};
export default JobDetail;
