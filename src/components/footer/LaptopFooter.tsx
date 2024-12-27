import React from 'react';
import SearchComponent from 'src/components/footer/components/SearchComponent';
import CategoryComponent from 'src/components/footer/components/CategoryComponent';
import LogoShareComponent from 'src/components/footer/components/LogoShareComponent';
import LogoRatingComponent from 'src/components/footer/components/LogoRatingComponent';

const LaptopFooter = () => {
    return (
        <div className="hidden sm:block lg:hidden flex flex-col">
            <div className="">
                <CategoryComponent />
            </div>
            <hr className='border-gray-500 mt-5' />
            <div className='flex justify-between mt-5'>
                <div><LogoRatingComponent /></div>
                <div><LogoShareComponent /></div>
                <div><SearchComponent /></div>
            </div>
        </div>
    );
};

export default LaptopFooter;