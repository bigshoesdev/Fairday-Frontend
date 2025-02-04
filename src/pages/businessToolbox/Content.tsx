import Button from "src/components/common/Button"

const Content = () => {

    const buttonClick = () => {

    }

    return (
        <div className="flex flex-col py-10 gap-10 max-w-[950px]">
            <div className="flex flex flex-row justify-end gap-4">
                <Button
                    text="Start Your Work Here"
                    onClick={buttonClick}
                    className="bg-[#172734] text-white px-8 py-3 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                />

                <Button
                    text="Login / Register"
                    onClick={buttonClick}
                    className="bg-[#d7b135] text-white px-8 py-4 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                />
            </div>

            <div className="flex flex-col justify-end gap-4">
                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end">Find Help</span>
                    <Button
                        text="Post New Job"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end"></span>
                    <Button
                        text="Hired Applicant Performance Review"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end">Hire Vendors</span>
                    <Button
                        text="Job Listing & Applicant History"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end"></span>
                    <Button
                        text="Resume Lists"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end"></span>
                    <Button
                        text="Recruiting, Staffing & Referrals"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end">Shop Smart</span>
                    <Button
                        text="Local Vendors & Discounts"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end">Market Your Business</span>
                    <div className="w-full rounded-lg text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none flex justify-between items-center">
                        <span>Business Profile / Edit</span>
                        <Button
                            text="VIEW"
                            onClick={buttonClick}
                            className="bg-blue-500 text-white font-bold px-7 text-[18px] py-2  transition-all cursor-pointer focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end"></span>
                    <div className="w-full rounded-lg text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none flex gap-6">
                        <span>Advertise Your Business to Locals</span>
                        <span className="text-[#E11A1A] font-normal rotate-[-7.48deg]">Free !</span>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end"></span>
                    <Button
                        text="Job Search, Provide Estimates, Place Bids & Trade"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end"></span>
                    <Button
                        text="Jobs History"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>
                <div className="flex flex-row items-center justify-end gap-10">
                    <span className="w-[400px] text-black text-[22px] font-bold flex justify-end">Manage Your Operations</span>
                    <Button
                        text="Monitor Job Satisfaction"
                        onClick={buttonClick}
                        className="w-full text-left border border-[#BBC1DD] bg-white text-blue-600 font-bold px-8 text-[20px] py-4 transition-all cursor-pointer focus:outline-none"
                    />
                </div>

                <div className="mt-10 flex flex-col ml-[400px] text-[22px] text-[#1a7ff3] font-bold text-center">
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