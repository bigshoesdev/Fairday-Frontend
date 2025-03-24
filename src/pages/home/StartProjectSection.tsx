import { startProject } from 'src/mock/homeBanner.json';



const images = [
    "src/assets/images/banner1.png",
    "src/assets/images/banner2.png",
    "src/assets/images/banner3.png",
    "src/assets/images/banner4.png",
    "src/assets/images/banner5.png",
    "src/assets/images/banner6.png",
    "src/assets/images/banner7.png",
    "src/assets/images/banner8.png",
    "src/assets/images/banner9.png",
    "src/assets/images/banner10.png",
    "src/assets/images/banner11.png",
    "src/assets/images/banner12.png",
    "src/assets/images/banner13.png",
    "src/assets/images/banner14.png",

];


const StartProjectSection = () => {

    return (
        <div className='bg-primaryBlue p-5 items-center flex flex-col max-w-[1419px]'>
            <p className='px-5 py-10 text-center text-white text-[20px] font-bold'>Get your project started now...</p>

            <div className='bg-white w-[50px] h-1 rounded-[90px] '></div>

            <div className='grid sm:grid-cols-1 md:grid-cols-5 justify-center gap-5 my-10'>
                {startProject.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col justify-center items-center text-center opacity-100 hover:opacity-70 gap-[10px]'>
                            <img src={item.img} className='w-[120px] h-[120px]' />
                            <span className='text-[18px] font-bold text-white'>{item.title}</span>
                            <span className='text-[16px] text-white'>{item.subTitle}</span>
                        </div>
                    )
                })}
            </div>

            <div className="mx-auto p-4 hidden lg:block">
                <div className="grid lg:grid-cols-7 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden shadow-md">
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StartProjectSection