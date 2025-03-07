const SearchComponent = () => {
    return (
        <div className="w-full">
            <p className="mb-0 font-bold text-white text-[19px]">
                Search here
            </p>

            <p className="text-[14px] text-primaryGray ">
                Find Jobs and Trade Work
            </p>

            <div className="relative bg-[#223949] rounded-lg">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <div className="h-7 w-px bg-gray-200 mx-3"></div>
                </div>
                <input
                    type="search"
                    id="search"
                    className="ml-2 block outline-none w-full bg-transparent py-4 ps-12 text-sm text-gray-200 rounded-lg !bg-[#223949] focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Here"
                    required
                />
            </div>

        </div>
    );
};

export default SearchComponent;