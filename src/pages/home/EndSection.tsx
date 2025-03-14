import Button from 'src/components/common/Button';
import { useNavigate } from 'react-router-dom';

const EndSection = () => {
    const nagivate = useNavigate();

    return (
        <div className=' w-full bg-darkTealGray flex flex-col justify-center items-center bg-[url("https://fairdayjobs.com/src/assets/images/footer-banner.png")] bg-cover h-[402px]'>
            <div className='container'>
                <span className='text-white text-[37px] font-semibold flex text-center justify-center hidden xs:block'>
                    32 million professionals on demand.
                </span>
                <span className='mt-[10px] text-white text-[23px] flex text-center justify-center hidden xs:block'>
                    Why hire people when you can simply integrate our talented cloud workforce instead?
                </span>
            </div>
            <Button
                text="VIEW MORE"
                onClick={() => nagivate('/job-search')}
                className='mt-10 bg-primaryBlue text-[21px] text-white px-6 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none'

            ></Button>
        </div>
    )
}

export default EndSection