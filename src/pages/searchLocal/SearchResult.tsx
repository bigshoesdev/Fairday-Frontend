import DropPanel from 'src/components/common/DropPanel';

const SearchResult = () => {
    return (
        <div className='flex flex-col gap-5'>
            <span className='text-tealGray text-[36px] font-bold'>Current Search Results: Plumbing</span>

            <div className='flex flex-col relative'>
                <div className='border-[2px] border-red-600 rounded-t-[15px] p-4'>
                    <img src="src/assets/images/localSearch_img1.png"></img>
                </div>
                <div className='absolute bottom-36 sm:bottom-48 left-1/2 transform -translate-x-1/2'>
                    <img src="src/assets/images/qr_code.png" className='w-[100px]'></img>
                </div>
                <div className='rounded-b-[15px] flex flex-row grid grid-cols-2'>
                    <div className='bg-red-500 rounded-bl-[15px] py-10 flex justify-center'>
                        <div className='flex flex-col'>
                            <span className='text-white font-extrabold text-[20px] sm:text-[35px]'>10%</span>
                            <span className='text-white font-extrabold text-[20px] sm:text-[35px] mt-[-15px]'>DISCOUNT</span>
                            <span className='text-white font-thin text-[14px] sm:text-[20px] mt-[-10px]'>ON FIRST SERVICE</span>
                            <div className='flex justify-end'>
                                <span className='text-white font-thin text-[12px] sm:text-[14px]'>EXP. 1/26/24</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-red-600 rounded-br-[15px] pt-12 px-2 sm:px-10 flex'>
                        <div className='flex flex-col'>
                            <span className='text-white text-[12px] sm:text-[18px]'>Plum Right Industrial</span>
                            <span className='text-white text-[12px] sm:text-[18px]'>Plumbing LLC</span>
                            <span className='text-white text-[12px] sm:text-[18px]'>24/7 EMERGENCY SERVICE</span>
                            <span className='text-white text-[12px] sm:text-[18px]'>(555) 678-8910</span>
                            <span className='text-white text-[12px] sm:text-[18px]'>WEBSITE</span>
                            <span className='text-white text-[12px] sm:text-[18px]'></span>
                        </div>
                    </div>

                </div>
            </div>

            <hr className='bg-gray-200 h-[1px]' />

            <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-col relative text-white text-center'>
                    <div className='border-[2px] border-[#9c00ff] rounded-t-[15px] overflow-hidden'>
                        <img src="src/assets/images/localSearch_img2.png" className='h-[340px]'></img>
                    </div>
                    <div className='flex flex-col bg-[#9c00ff]'>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                    </div>
                    <div className='flex flex-col rounded-b-[15px] bg-[#7a19b8]'>
                        <span>1</span>
                        <span>1</span>
                    </div>
                </div>

                <div className='flex flex-col relative text-white text-center'>
                    <div className='border-[2px] border-[#279134] rounded-t-[15px] overflow-hidden'>
                        <img src="src/assets/images/localSearch_img3.png" className='h-[340px]'></img>
                    </div>
                    <div className='flex flex-col bg-[#279134]'>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                    </div>
                    <div className='flex flex-col rounded-b-[15px] bg-[#1d7428]'>
                        <span>1</span>
                        <span>1</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SearchResult;
