import DesktopHeader from "src/components/header/DesktopHeader"
import LaptopHeader from "src/components/header/LaptopHeader"

const Header = () => {
    return (
        <div className="w-full bg-tealGray ">
            <header className='px-2 xs:px-5 py-[25px] mx-auto w-full '>
                <DesktopHeader />
                <LaptopHeader />
            </header>
        </div>
    )
}

export default Header