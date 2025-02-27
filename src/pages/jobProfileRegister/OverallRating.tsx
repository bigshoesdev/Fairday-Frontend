import Button from "src/components/common/Button";
import Rating from 'src/components/common/Rating'

const OverallRating = ({ hideEmployerConfirm, setHideEmployerConfirm, agreeConfirm, setAgreeConfirm, autoSaveContrim, setAutoSaveContrim }) => {


    const reviews = [
        {
            title: "Working on a UX/UI Job",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            author: "J.J Williams",
        },
        {
            title: "Working on a UX/UI Job",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            author: "J.J Williams",
        },
        {
            title: "Working on a UX/UI Job",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
            author: "J.J Williams",
        },
    ];

    const buttonClick = () => {

    }

    const updateRating = (mark) => {

    }

    return (
        <div className="flex flex-col p-10 bg-white shadow-xl rounded-xl max-w-[950px]">

            <span className="font-semibold mb-5">OVERALL RATINGS</span>
            <Rating
                name={""}
                type={""}
                size={"small"}  // small, middle, large
                color={"yellow"}  // yellow, red
                isSelectable={false}  // avaialble for updating the rating or not
                updateRating={(mark) => updateRating(mark)}
            />
            <div className="flex gap-3">
            </div>

            <div className="border border-gray-400 rounded-[5px] p-5 flex flex-col mt-16">
                <span className="text-[20px] text-gray-500">Recenter Employer Reviews</span>
                <div className="flex gap-3 mt-4">

                </div>
                <div className="flex flex-col gap-5 mt-7">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col">
                            <span className="font-semibold">{review.title}</span>
                            <span className="mt-3 text-gray-500">{review.description}</span>
                            <div className="flex flex-row mt-3">
                                <span className="text-[16px] text-black font-semibold">{review.author}</span>
                                <div className="flex gap-3 mt-4">
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 ml-10 flex flex-col gap-5">
                    <label className="flex items-center space-x-5">
                        <input
                            type="checkbox"
                            className="w-[24px] h-[24px] form-checkbox text-blue-600"
                            checked={hideEmployerConfirm}
                            onChange={() => setHideEmployerConfirm((prev) => !prev)}
                        />
                        <span className="font-semibold text-[14px] text-gray-600">
                            Hide Employer Review Comments</span>
                    </label>

                    <label className="flex items-center space-x-5">
                        <input
                            type="checkbox"
                            className="w-[24px] h-[24px] form-checkbox text-blue-600"
                            checked={agreeConfirm}
                            onChange={() => setAgreeConfirm((prev) => !prev)}
                        />
                        <span className="font-semibold text-[14px] text-gray-600">
                            By hitting the <span className="text-primaryBlue">'Register'</span> button , you agree to the <span className="text-primaryBlue">Terms conditions</span></span>
                    </label>
                </div>
            </div>
            <span className="mt-2">In 500 Words (Min).</span>
            <div className="flex justify-end">
                <Button
                    text=" VIEW PROFILE"
                    onClick={buttonClick}
                    className="w-max mt-5 bg-primaryBlue text-white px-8 sm:py-4 py-2 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-normal"
                />
            </div>
            <div className="flex justify-center flex-col items-center mt-5">
                <label className="flex items-center space-x-5 ">
                    <input
                        type="checkbox"
                        className="w-[24px] h-[24px] form-checkbox text-blue-600"
                        checked={autoSaveContrim}
                        onChange={() => setAutoSaveContrim((prev) => !prev)}
                    />
                    <span className="font-bold text-[16px] text-gray-600">
                        Auto Save Updated Profile
                    </span>
                </label>

                <Button
                    text="SAVE UPDATED PROFILE"
                    onClick={buttonClick}
                    className="w-max mt-10 bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-normal"
                />
            </div>

        </div>
    );
};

export default OverallRating;
