import { useSelector } from 'react-redux';

const JobCategory = () => {
    const { jobConfig } = useSelector((state: any) => state);
    const groupedData = jobConfig.jobCategoryList;

    return (
        <div className="p-6 min-h-screen flex flex-col gap-4">
            <div className='flex flex-col'>
                <span className='text-[#197ff2] text-[20px] font-bold'>Browse top job categories</span>
                <span>Show: all jobs - <span className='text-[#197ff2]'>153 new jobs</span></span>
            </div>
            <div className="columns-1 sm:columns-2 md:columns-4 gap-6">
                <div>
                    {Object.keys(groupedData).sort().map((letter) => (
                        <div key={letter} className="break-inside-avoid mb-4">
                            <h2 className="underline text-lg text-primaryBlue font-bold mb-2 pb-1">{letter}</h2>
                            <ul className="space-y-1">
                                {groupedData[letter].map((item: string, index: number) => (
                                    <li 
                                        key={index} 
                                        className="text-gray-700 cursor-pointer hover:text-blue-500 before:content-['•'] before:mr-2"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
