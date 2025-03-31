import Button from 'src/components/common/Button';
import React, { useState } from 'react';
import SignUp from 'src/pages/SignUp';
import CloseFullscreen from '@mui/icons-material/CloseFullscreen';


const About = () => {

    const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);

    const handleOpenModal = (modalType: 'login' | 'register') => {
        setActiveModal(modalType);
    };

    const handleBackgroundClick = () => {
        closeModal();
    };

    const closeModal = () => {
        console.log('3');

        setActiveModal(null);
    };

    const switchToLogin = () => {
        setActiveModal('login');
      };

    return (
        <div className="container">
            <div className='w-full bg-[#e2e2e3a1] flex flex-col justify-center items-center bg-[url("https://fairdayjobs.com/src/assets/images/about_hero.jpg")] bg-cover h-[500px]'>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-[42px] font-bold">ABOUT</p>
                    <p className="text-white text-[42px]">Fairday Marketplace</p>
                </div>
            </div>
            <div className="container p-10 flex flex-col justify-center text-[20px] text-gray-900">
                <div>
                    Being from the Hudson Valley, 50 miles north of New York City, we have watched our small communities rapidly grow into bustling suburban areas over the last few decades. Much has changed about commerce in short time. Finding a good job, a good employee, help around the house ,the farm, or for business, is often not as easy as it used to be. Although the emergence of the internet during these years was intended to provide efficiency in many ways, it seems apparent to many of us this is not always the case. Once widely used for local shopping, hiring and finding work, local newspapers have since been replaced. Our attention has been diverted to digital places. In the opinion of many, this has led to some problematic changes with many transactions being done far away instead of with locals. This digital interference has not exactly been beneficial to local small businesses, their workers and the fragile economies of many small communities. While searching for work, many of us have experienced landing jobs that turn out to be more like the amount of work once done by three and sometimes much different than had been first explained to be… Fairday has been developed to help correct some of this.
                </div>
                <br />

                <div>
                    Whether you are an employer, employee, local merchant, contractor, service provider, tradesperson, corporate manager, rancher, farmer or working from your home, Fairday has been developed to combine the modern age with some old school good common sense. One thing remains clear, the key to long term personal and business success, is the understanding and importance of working to forge long term business relationships with each job, customer and each product made. This is how trust is earned and good business is achieved.
                </div>
                <br />

                <div>
                    Fairday’s mission is to help revitalize economics for many people, businesses and communities by providing a trustworthy and effective interactive platform for local trade. We intend to enable all site users a way to reach out to other locals, to get things done and for economic gain. One can even search the world and apply for jobs with one simple click.
                </div>
                <br />

                <div>
                    The platform has been developed to encourage new & top quality business relationships. Utilizing a variety of methods to authenticate site users, providing employer hiring options and interactive tools, you will find Fairday to be a very useful portal for many daily business activities. Among the main features for landing work, are an assortment of tools for saving money, finding discounts and scoring good deals. Fairday enables alternative types of trade with your business or skills. Money is not always needed to make a good trade these days. We provide a space where businesses, homeowners and individuals can list jobs to achieving progress and get things accomplished in a variety of ways. Fairday is a bit different and unlike other job listing sites, many of which are long outdated. We intend to provide the public low-cost advertising and self-promotional tools for when you are ready to make your next business expansion or new job move. The first ad will be free, just for you to test and see. The Fairday platform will also benefit corporate managers, with expanded advertising plans and grassroots hiring tools for finding locals who work hard and most often stay. Fairday provides more ways to earn a healthy share and a fair days pay. Fairday is the better way !
                </div>
                <br />

                <div>
                    Homeowners and individuals will have advanced tools to network nearby to get things done, to complete work around their homes more easily, and to assist friends and family members living far away. You dont always need to pay a fortune with one of the top 5 providers typically the only ones found with most search results. Fairday is organized more like the back section of a newspaper with job listings, coupons and contractor ads. It also has a format like the yellow pages of a telephone book for searching and shopping for needs in alphabetical order. These have been the well tested methods for finding local resources during the many centuries past. Fairday has simply enhanced this old standard with modern technolgies, making it more easy than ever before!
                </div>
                <br />

                <div>
                    The platform will help you find more affordable local contractors, make trades and find services that better fit your needs! With one user dashboard, we intend to provide the most efficient way to access the local business marketplace.
                </div>
                <br />

                <div>
                    Fairday respects your privacy. We will not sell or share your personal information for profits. Instead, Individuals, employers and businesses can select to be promoted in a variety of useful ways. We strive to include the broadest range of jobs and business category selections for your career building plans.
                </div>
                <br />

                <div>
                    Best of all, the Fairday platform provides an equal and level playing field for all. We strive to promote the highest of standards and fairness to all job seekers, trades people and business managers. When you prosper, the people you interact with should prosper as well.
                </div>
                <br />

                <div>
                    As with this renowned Hudson Valley train trestle bridge in the image above, all good business relationships are best forged when meeting in the middle, earning trust and finding solid ground. While richness is not always counted in terms of the amount of currency in your pocket, it is often found by the quality of the relationships created with others in your community and along the way.
                </div>
                <br />

                <div className="flex flex-col justify-center items-center mt-8">
                    <div className="text-[25px] font-bold text-black">Welcome ... ... to FAIRDAY</div>
                    <div className="mt-2 text-[20px] text-gray-800">We encourage you to sign in and prosper !</div>
                    <Button
                        text="REGISTER NOW !"
                        onClick={() => handleOpenModal('register')}
                        className='mt-6 text-[22px] bg-[#d7b135] text-white px-20 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBlue focus:outline-none'
                    />
                </div>

                {activeModal && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <div className="bg-white p-6 rounded-[20px] shadow-md w-[600px]">
                            <div
                                className='w-full flex justify-end cursor-pointer'
                                onClick={handleBackgroundClick}
                            >
                                <CloseFullscreen />
                            </div>
                            {activeModal === 'register' && <SignUp switchToLogin={switchToLogin} closeModal={closeModal} />}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default About