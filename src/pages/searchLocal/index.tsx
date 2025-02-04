import SearchBar from 'src/pages/searchLocal/SearchBar';
import MapContent from 'src/pages/searchLocal/MapContent';
import SearchHistory from 'src/pages/searchLocal/SearchHistory';
import SearchResult from 'src/pages/searchLocal/SearchResult';
import Button from 'src/components/common/Button';

const SearchLocal = () => {

    const buttonClick = () => {
    }

    return (
        <div className='w-full flex justify-center items-center flex-col bg-[#f7fbff] gap-2'>
            <SearchBar />
            <div className='container flex flex-col gap-5 '>
                <MapContent />
            </div>
            <div className='max-w-[950px] w-full flex flex-col gap-7 p-10'>
                <div className='flex justify-end'>
                    <Button
                        text="ADVERTISE YOUR BUSINESS HERE"
                        onClick={buttonClick}
                        className="bg-yellow-500 font-bold text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:text-white hover:border-white focus:outline-none rounded-[6px]"
                    />
                </div>
                <div className='flex justify-end mr-24 text-red-500'>Local Ads are free!</div>
                <SearchHistory />
                <SearchResult />
                <Button
                    text="ADDITIONAL SEARCH RESULTS"
                    onClick={buttonClick}
                    className="bg-primaryBlue font-bold text-white p-5 hover:bg-blue-400 transition-all cursor-pointer hover:text-white hover:border-blue-400 focus:outline-none rounded-[6px]"
                />
            </div>


        </div>
    )
}

export default SearchLocal