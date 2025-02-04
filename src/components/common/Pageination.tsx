const Pagination = ({ jobDetailsInfos, currentPage, setCurrentPage, onPageChange }: any) => {
  const pageSize = 2; // Fixed page size of 15

  // Calculate the total number of pages
  const totalPages = Math.ceil(jobDetailsInfos.length / pageSize);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);  // Update current page
    onPageChange(page);     // Call onPageChange to propagate the page change
  };

  // Determine the slice of data for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageData = jobDetailsInfos.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      <div>
        {currentPageData.map((job, index) => (
          <div key={index}>{job.title}</div> // Replace `job.title` with actual data
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border text-blue-500 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white font-bold"
                : "border-blue-500"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
