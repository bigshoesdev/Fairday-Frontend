import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInboxLine } from "react-icons/ri";

const LogoShareComponent = () => {
    return (
        <div className="w-full flex flex-col justify-between items-start">
            
            <div className="flex">
                <img src='src/assets/images/fb_header.png' className='opacity-50 hover:opacity-100 cursor-pointer transition-all'></img>
                <img src='src/assets/images/ig_header.png' className='ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all'></img>
                <img src='src/assets/images/x_header.png' className='ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all'></img>
                <img src='src/assets/images/linkedin.png' className='ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all'></img>
            </div>
        </div>
    );
};

export default LogoShareComponent;