import SearchComponent from 'src/components/footer/components/SearchComponent';
import LogoShareComponent from 'src/components/footer/components/LogoShareComponent';
import LogoRatingComponent from 'src/components/footer/components/LogoRatingComponent';

const MobileFooter = () => {
    return (
        <div className="block sm:hidden flex flex-col">
            <div><LogoRatingComponent /></div>
            <div><LogoShareComponent /></div>
            <div className='mt-[30px]'><SearchComponent /></div>
        </div>
    );
};

export default MobileFooter;