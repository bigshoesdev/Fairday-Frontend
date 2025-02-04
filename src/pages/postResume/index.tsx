import { useState } from 'react';
import Button from "src/components/common/Button";
import PaymentArea from "src/pages/postResume/PaymentArea"
import UploadResume from 'src/pages/postResume/UploadResume';

const PostResume = () => {


    const [selectedFile, setSelectedFile] = useState<File>();

    const [selectedPayment, setSelectedPayment] = useState('mastercard');
    const [checkStatus, setCheckStatus] = useState({
        review: false,
        allowStaffing: false
    });

    const buttonClick = () => {

    }

    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full bg-tealGray text-center py-20 text-white font-bold title">
                Post Your Resume
            </div>

            <div className="bg-[#fafafa] w-full flex justify-center p-5 sm:p-10">
                <div className="max-w-[950px] w-full flex flex-col gap-10">
                    <UploadResume
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                    />
                    <PaymentArea
                        selectedPaymentMethod={selectedPayment}
                        setSelectedPaymentMethod={setSelectedPayment}
                    />
                    <Button
                        text="UPGRADE JOB APPLICATION PROFILE"
                        onClick={buttonClick}
                        className="w-full mt-5 bg-primaryBlue text-white px-8 py-4 hover:bg-[#f59e0b] transition-all cursor-pointer hover:border-[#f59e0b] focus:outline-none font-normal"
                    />
                </div>
            </div>

        </div>
    )
}

export default PostResume