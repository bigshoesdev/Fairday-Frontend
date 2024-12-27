import React from 'react';

interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  labelClass?: string;
  inputClass?: string;
  spanClass?: string;
}

const RadioLabel: React.FC<CheckboxWithLabelProps> = ({
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
        type="radio"
        className={`w-[15px] h-[15px] form-checkbox text-blue-600 ${inputClass}`}
        checked={checked}
        onChange={onChange}
      />
      <span className={`text-[20px] text-[#4A4A4A] ${spanClass}`}>{label}</span>
    </label>
  );
};

export default RadioLabel;
