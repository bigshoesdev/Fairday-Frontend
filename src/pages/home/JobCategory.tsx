import { useSelector } from 'react-redux';

const JobCategory = () => {
    const { jobConfig } = useSelector((state: any) => state);
    const groupedData = jobConfig.jobCategoryList;

    return (
        <div className=" max-w-[1419px] container w-full min-h-screen flex flex-col gap-4 py-10 hidden sm:block">
            <div className="flex flex-col">
                <span className="text-[#197ff2] text-[20px] font-bold">Browse top job categories</span>
                <span>Show: all jobs - <span className="text-[#197ff2]">153 new jobs</span></span>
            </div>
            <div className="columns-1 sm:columns-2 md:columns-4 gap-6">
                {Object.keys(groupedData).sort().map((letter) => (
                    <div key={letter} className="break-inside-avoid mb-4">
                        <h2 className="underline text-lg text-primaryBlue font-bold mb-2 pb-1">{letter}</h2>
                        <ul className="space-y-1">
                            {groupedData[letter].map((item: { id: string; name: string }) => (
                                <li 
                                    key={item.id} 
                                    className="text-gray-700 cursor-pointer hover:text-blue-500 before:content-['•'] before:mr-2"
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCategory;
