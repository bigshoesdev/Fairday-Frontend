import { headerMenu } from 'src/mock/homeBanner.json'

const HeaderSection = () => {

    return (
        <div className="hidden xl:flex xl:w-full xl:justify-center xl:items-center xl:bg-darkTealGray ">
            <div className='container flex items-center sm:p-3 md:p-7 justify-center gap-16'>
                {headerMenu.map((item, index) => {
                    return(
                        <span key={index} className='text-primaryGray cursor-pointer hover:text-white flex justify-center items-center text-center'>
                            {item.title}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default HeaderSection