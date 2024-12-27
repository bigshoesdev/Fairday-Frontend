const SearchComponent = () => {
    return (
        <div className="w-full">
            <p className="mb-0 font-bold text-white text-[19px]">
                Search here
            </p>

            <p className="text-[14px] text-primaryGray ">
                Find Jobs and Trade Work
            </p>

            <div className="relative">
                <div className="absolute inset-y-0 start-0 px-4 flex items-center ps-3 pointer-events-none ">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="search"  className=" block outline-none w-full bg-transparent p-4 ps-10 text-sm text-gray-50  rounded-lg !bg-[#223949] focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here" required />
            </div>

        </div>
    );
};

export default SearchComponent;