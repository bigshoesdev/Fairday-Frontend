import Banner from 'src/pages/home/Banner';
import EndSection from 'src/pages/home/EndSection';
import StartProjectSection from 'src/pages/home/StartProjectSection';
import HeroSection from 'src/pages/home/HeroSection';
import HeaderSection from 'src/pages/home/HeaderSection';
import JobContent from 'src/pages/home/JobContent';
import JobCategory from 'src/pages/home/JobCategory';
import HeaderImage from 'src/pages/home/HeaderImage';
import SearchBar from 'src/pages/home/SearchBar';

const Home = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col bg-[#f7fbff]'>
            <HeaderSection />
            <div className='w-full bg-primaryBlue flex justify-center sticky top-0 z-50'>
                <SearchBar />
            </div>
            <HeaderImage />
            <div className='w-full'>
                <HeroSection />
            </div>
            <div className='w-full flex justify-center bg-primaryBlue'>
                <StartProjectSection />
            </div>
            <div className='max-w-[1419px]'>
                <Banner />
            </div>
            <div className='w-full bg-[#fafafa] flex justify-center'>
                <JobContent />
            </div>
            <div className='max-w-[1419px]'>
                <JobCategory />
            </div>
            <EndSection />

        </div>
    )
}

export default Home



