const Staff = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full bg-tealGray text-center py-20 text-white font-bold title">
                <span className="container">Staffing Agents and Employers</span>
                
            </div>
            <div className="bg-[#fafafa] w-full flex justify-center">
                <div className="flex flex-col max-w-[950px]  py-12 container">
                    <div className="text-center subtitle3">
                        Staffing Agents and Employers may refer Applications for employment to listed jobs on <span className="text-primaryBlue font-bold">FAIRDAY</span>. There are a few simple steps to follow.
                    </div>
                    <div>

                    </div>
                    <div className="mt-10 text-contentText">
                        <ol className="list-decimal pl-6 space-y-4">
                            <li>
                                <p className="ml-5 md:ml-10">
                                    All applicants to be referred will be required to have applied to one of your Job Posts.
                                    A list of your applicants can be found in your Business ToolBox in both the
                                    <a href="#" className="text-blue-600 hover:text-blue-800"> Job Listing History Page </a>
                                    and
                                    <a href="#" className="text-blue-600 hover:text-blue-800"> Job Applicant Review </a>
                                    page.
                                </p>
                            </li>
                            <li>
                                <p className="ml-5 md:ml-10">
                                    The Referral Applicant will need to have enabled and checked the box next to <a href='#' className="text-blue-600 hover:text-blue-800">Allow Copy Profile for Referral </a>
                                     option  found in their Profile Registration page in the ToolBox.
                                </p>
                            </li>
                            <li>
                                <p className="ml-5 md:ml-10">
                                    When a Job listing or employment position is suitable for your Applicant Referral,
                                    Open the
                                    <a href="#" className="text-blue-600 hover:text-blue-800"> Applicant's Profile </a>
                                    and click on the
                                    <a href="#" className="text-blue-600 hover:text-blue-800"> Attach Profile for Referral </a>
                                    tab found toward the bottom section.
                                </p>
                            </li>
                            <li>
                                <p className="ml-5 md:ml-10">
                                    Click back to the Job Ad and select the <a href='#' className="text-blue-600 hover:text-blue-800"> Apply Tab </a>.
                                    Find the referral section toward the bottom and paste the profile in the input box. Staffing Agents can select the "Agents fee" option to enable the dual hiring requirement and facilitate employer understanding of any staffing fees. It is recommended, staffing agents have Rates, Fees and/or Terms of Service sections of their Business Applicant Profile completed.
                                </p>
                            </li>
                            <li>
                                <p className="ml-5 md:ml-10">
                                    The Employer will receive a referral application with a dual profile.
                                    This can be found in the
                                    <a href="#" className="text-blue-600 hover:text-blue-800"> Job Applicant Review</a>.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Staff