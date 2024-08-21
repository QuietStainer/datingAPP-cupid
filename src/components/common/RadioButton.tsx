// src/components/RadioButton.tsx
import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  icon: JSX.Element;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  icon,
  checked,
  onChange,
}) => {
  return (
    <li className="rounded-full">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="hidden peer"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label
        htmlFor={id}
        className="inline-flex flex-col items-center justify-between w-full p-5 px-8 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer peer-checked:bg-[#FF5069] peer-checked:text-white"
      >
        {icon}
        <div className="block">
          <div className="w-full text-lg font-semibold">{label}</div>
        </div>
      </label>
    </li>
  );
};

export default RadioButton;
