const JobSearchMode = () => {
  return (
    <div className="mb-3 flex">
      <span className="font-semibold text-gray-400">Sort by:</span>
      <span className="text-black font-semibold text-right ml-auto">
        <span className=" text-black font-semibold">Relevance</span>-
        <span className="text-blue-600 font-semibold">Date</span>
      </span>
    </div>
  );
};

export default JobSearchMode;
