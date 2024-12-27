import { useSelector } from 'react-redux';

const JobCategory = () => {

    const { jobConfig } = useSelector((state: any) => state);
    const groupedData = jobConfig.jobCategoryList;

    return (
        <div className="p-6 min-h-screen">
            <div className="columns-1 sm:columns-2 md:columns-4 gap-6">
                {Object.keys(groupedData).sort().map((letter) => (
                    <div key={letter} className="break-inside-avoid p-4 mb-4">
                        <h2 className="underline text-lg text-primaryBlue font-bold mb-2 pb-1">{letter}</h2>
                        <ul className="space-y-1">
                            {groupedData[letter].map((item: string, index: number) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCategory;
