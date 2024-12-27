import React from 'react';

interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  labelClass?: string;
  inputClass?: string;
}

const CheckboxLable: React.FC<CheckboxWithLabelProps> = ({
  label,
  checked,
  onChange,
  labelClass = '',
  inputClass = '',
}) => {
  return (
    <label className={`flex items-center space-x-4 ${labelClass}`}>
      <input
        type="checkbox"
        className={`w-[15px] h-[15px] form-checkbox text-blue-600 ${inputClass}`}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-[20px] text-[#4A4A4A]">{label}</span>
    </label>
  );
};

export default CheckboxLable;
