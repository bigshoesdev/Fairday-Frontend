import Button from "src/components/common/Button"

const Content = () => {

    const buttonClick = () => {

    }

    return (
        <div className="flex flex-col py-10 px-3 gap-10 w-[950px]">
            <div className="flex flex flex-row justify-end gap-4 items-center ">
                <span className="font-bold text-black text-[18px]">Start Your Work Here</span>

                <Button
                    text="Login / Register"
                    onClick={buttonClick}
                    className="bg-[#d7b135] ml-5 text-white px-8 py-4 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-4 ">
                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Search Jobs"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <div className="w-full rounded-lg text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none flex justify-between items-center">
                        <span>Your Applicant Profile / Edit</span>
                        <Button
                            text="VIEW"
                            onClick={buttonClick}
                            className="bg-blue-500 text-white font-bold px-7 text-[18px] py-2  transition-all cursor-pointer focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Your Jobs & Employment History"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Post Your Resume"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Monitor Your Job Progress"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Local Services & Discounts"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Review and Comment on your Employers"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>


                <div className="flex flex-row items-center justify-end gap-10">
                    <Button
                        text="Post a Job / Business ToolBox"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="mt-10 flex flex-col text-[22px] text-[#1a7ff3] font-bold text-center">
                    <p>Account Activity</p>
                    <p>A Fair Day for Fair Pay Guide</p>
                    <p>Site Terms</p>
                    <p>Dispute Mediation Services</p>
                </div>

            </div>
        </div>
    )
}

export default Content