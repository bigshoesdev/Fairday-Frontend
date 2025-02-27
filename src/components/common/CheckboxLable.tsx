import React from 'react';

interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  labelClass?: string;
  inputClass?: string;
  spanClass?: string;
}

const CheckboxLable: React.FC<CheckboxWithLabelProps> = ({
  label,
  checked,
  onChange,
  labelClass = '',
  inputClass = '',
  spanClass='',
}) => {
  return (
    <label className={`flex items-center space-x-4 ${labelClass}`}>
      <input
        type="checkbox"
        className={`w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] form-checkbox text-blue-600 ${inputClass}`}
        checked={checked}
        onChange={onChange}
      />
      <span className={`text-[14px] sm:text-[20px] text-[#4A4A4A] ${spanClass}`}>{label}</span>
    </label>
  );
};

export default CheckboxLable;
