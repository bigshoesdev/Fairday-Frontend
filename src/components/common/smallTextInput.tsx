import React from 'react';

interface Props {
    label: string;
    value: string;
    type: string;
    style: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SmallTextInput = ({
    label,
    value,
    type,
    style,
    onChange,
}: Props) => {
    return (
        <div className={`flex flex-col ${style}`}>
            <input
                placeholder={label}
                type={type}
                value={value}
                onChange={onChange}
                className="ml-6 mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
            />
        </div>
    );
};

export default SmallTextInput;
