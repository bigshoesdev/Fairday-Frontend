import Content from "src/pages/applicantToolBox/Content"

const ApplicantToolBox = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full bg-[#304b5e] text-center text-white py-20 flex items-center flex-col">
                <span className="title">Applicant Toolbox</span>
                <div className="text-white subtitle3 py-4 flex flex-wrap justify-center gap-4 max-w-[1200px]">
                    <span>• Find Good Jobs</span>
                    <span>• Apply with a Click</span>
                    <span>• Market Your Skills</span>
                    <span>• Find Gigs & Side Jobs</span>
                    <span>• Trade Your Skills with other Tradespeople</span>
                    <span>• Fast Track Your Career</span>
                    <span>• Earn More <span className="text-yellow-400">$</span></span>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img src="src/assets/images/applicant_hero.png"></img>
            </div>

            <div className="bg-[#fafafa] w-full flex justify-center">
                <Content />
            </div>

        </div>
    )
}

export default ApplicantToolBox