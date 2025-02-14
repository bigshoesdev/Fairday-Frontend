import React from 'react';

interface CheckboxWithLabelProps {
  label: string;
  name: string | undefined;
  checked: boolean;
  onChange: (any) => any;
  labelClass?: string;
  inputClass?: string;
  spanClass?: string;
}

const RadioLabel: React.FC<CheckboxWithLabelProps> = ({
  name = 'radio',
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
        name={name}
        className={`w-[15px] h-[15px] form-checkbox text-blue-600 ${inputClass}`}
        checked={checked}
        onChange={e=>onChange(e)}
      />
      <span className={`text-[20px] text-[#4A4A4A] ${spanClass}`}>{label}</span>
    </label>
  );
};

export default RadioLabel;
