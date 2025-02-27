import DesktopFooter from "src/components/footer/DesktopFooter"
import LaptopFooter from "src/components/footer/LaptopFooter"
import MobileFooter from "src/components/footer/MobileFooter"


const Footer = () => {
    return (
        <footer className="w-full bg-tealGray">
            <div className='container p-10 sm:p-5 lg:py-[50px] mx-auto'>
                <DesktopFooter />
                <LaptopFooter />
                <MobileFooter />
            </div>
            <div className='text-center text-darkgray bg-[#223949] py-2'>
                © Copyright: 2024 Fairdayjobs
            </div>
        </footer>
    )
}

export default Footer