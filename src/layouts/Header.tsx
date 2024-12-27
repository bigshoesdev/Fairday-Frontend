import DesktopHeader from "src/components/header/DesktopHeader"
import LaptopHeader from "src/components/header/LaptopHeader"

const Header = () => {
    return (
        <div className="w-full bg-tealGray">
            <header className='container px-5 py-[25px] mx-auto'>
                <DesktopHeader />
                <LaptopHeader />
            </header>
        </div>
    )
}

export default Header