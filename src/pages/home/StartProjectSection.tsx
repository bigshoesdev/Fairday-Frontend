import React from 'react';
import { startProject } from 'src/mock/homeBanner.json';

const StartProjectSection = () => {

    return (
        <div className='w-full bg-primaryBlue p-5 items-center flex flex-col'>
            <p className='px-5 py-10 text-center text-white text-[20px] font-bold'>Get your project started now...</p>

            <div className='bg-white w-[50px] h-1 rounded-[90px] '></div>
           
            {/* <div className='flex flex-wrap gap-5 justify-center my-10'> */}
            <div className='grid sm:grid-cols-1 md:grid-cols-5 justify-center gap-5 my-10'>
                {startProject.map((item, index) => {
                    return (
                        // <div key={index} className='flex flex-col justify-center items-center text-center opacity-100 hover:opacity-50 cursor-pointer gap-[10px]'>
                        //     <img src={item.img} className='w-[120px] h-[120px]'/>
                        //     <span className='text-[18px] font-bold text-white'>{item.title}</span>
                        //     <span className='text-[16px] text-white'>{item.subTitle}</span>
                        // </div>
                        <div key={index} className='flex flex-col justify-center items-center text-center opacity-100 hover:opacity-50 cursor-pointer gap-[10px]'>
                            <img src={item.img} className='w-[120px] h-[120px]'/>
                            <span className='text-[18px] font-bold text-white'>{item.title}</span>
                            <span className='text-[16px] text-white'>{item.subTitle}</span>
                        </div>
                    )
                })}
            </div>


        </div>

    )
}

export default StartProjectSection