import React from "react";
import "./InputField.scss";
import { InputTypes } from "../utils";

interface InputProps {
  title: string;
  value: string;
  type: InputTypes;
  handleInputChange: (type: InputTypes, value: string) => void;
  errorMessage: string;
  isError: boolean;
  placeholder: string;
}

const InputField: React.FC<InputProps> = ({
  title,
  handleInputChange,
  type,
  value,
  errorMessage,
  isError,
  placeholder,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleInputChange(type, value);
  };
  return (
    <div className="age-calculator-input-wrapper">
      <h3 className={`age-calculator-input-title ${isError && "error"}`}>
        {title}
      </h3>
      <input
        type="number"
        className={`age-calculator-input ${isError && "error"}`}
        onChange={handleOnChange}
        value={value}
        placeholder={placeholder}
      />
      {errorMessage && (
        <h3 className="age-calculator-input-error">{errorMessage}</h3>
      )}
    </div>
  );
};

export default InputField;
