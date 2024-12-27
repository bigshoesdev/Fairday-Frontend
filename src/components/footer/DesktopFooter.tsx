import SearchComponent from 'src/components/footer/components/SearchComponent';
import CategoryComponent from 'src/components/footer/components/CategoryComponent';
import LogoShareComponent from 'src/components/footer/components/LogoShareComponent';
import LogoRatingComponent from 'src/components/footer/components/LogoRatingComponent';


const DesktopFooter = () => {
    return (
        <div className="w-full hidden lg:grid grid-cols-12 gap-8">
            <div className="col-span-3">
                <LogoRatingComponent />
                <LogoShareComponent />
            </div>
            <div className="col-span-6">
                <CategoryComponent />
            </div>
            <div className="col-span-1"/>
            <div className="col-span-2">
                <SearchComponent />
            </div>
        </div>
    );
};

export default DesktopFooter;
