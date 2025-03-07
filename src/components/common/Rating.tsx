import React from 'react';
import clsx from 'clsx'

interface RatingProps {
    // size: string;
    // onClick: () => void;
    size?: string;
}

// const Rating: React.FC<RatingProps> = ({  }) => {
const Rating = ({ name, type, size, color, isSelectable, updateRating }) => {

    const bufferUpdatingRate = (mark) => {
        if (isSelectable) updateRating(mark)
    }

    return (
        <div className='flex justify-start items-center items-center gap-2'>
            {Array(5).fill(0).map((item, index) => index).map((item, index) =>
                <div
                    key={index}
                    onClick={() => bufferUpdatingRate(item)}
                >
                    {
                        <svg
                            className={clsx(
                                "w-8 h-8 text-gray-300 hover:text-yellow-500 cursor-pointer"
                            )}
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    }
                </div>
            )}
        </div>
    );
}

export default Rating;
