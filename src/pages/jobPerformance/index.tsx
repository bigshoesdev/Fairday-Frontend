import { useState} from 'react'
import Content from "src/pages/jobPerformance/Content"

const JobPerformance = () => {

    const [hideEmployerConfirm, setHideEmployerConfirm] = useState(false);
    const [agreeConfirm, setAgreeConfirm] = useState(false);
    const [autoSaveContrim, setAutoSaveContrim] = useState(false);


    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full bg-tealGray text-center py-20 text-white font-bold text-[44px]">
                Job Performance
            </div>
            <div className="bg-[#fafafa] w-full flex justify-center py-24">
                <Content
                    hideEmployerConfirm={hideEmployerConfirm}
                    setHideEmployerConfirm={setHideEmployerConfirm}
                    agreeConfirm={agreeConfirm}
                    setAgreeConfirm={setAgreeConfirm}
                    setAutoSaveContrim={setAutoSaveContrim}
                    autoSaveContrim={autoSaveContrim}
                />
            </div>

        </div>
    )
}

export default JobPerformance