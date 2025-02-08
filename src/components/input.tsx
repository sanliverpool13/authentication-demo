import React, { FocusEvent } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
  name: string;
  value: string;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  isPassword: boolean;
}

const Input = ({
  placeholder,
  type,
  id,
  name,
  value,
  error,
  onChange,
  onBlur,
  isPassword,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full pointer-events-auto ${isPassword ? "focus:outline-none" : "border"} ${!isPassword && error ? "border-error-light" : "border-border-grey"}  rounded-md p-2.5 h-10 text-base`}
    />
  );
};

export default Input;
