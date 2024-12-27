const JobDistance = () => {
  return (
    <div className="mb-3">
      <p className="text-[16px] font-semibold text-gray-900">Distance:</p>
      <select className="w-full border font-bold border-gray-300 text-sm rounded-md p-2">
        <option>within 25 mi</option>
        <option>within 50 mi</option>
        <option>within 100 mi</option>
      </select>
    </div>
  );
};
export default JobDistance;
