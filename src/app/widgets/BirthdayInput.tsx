import React from "react";
import "./BirthdatInput.scss";
import InputField from "./InputField";
import {
  InputTypes,
  datErrorMessage,
  defaultInputFieldsErrorState,
  defaultInputFieldsState,
  inputFields,
} from "../utils";

interface BirthdayInputProp {
  inputState: typeof defaultInputFieldsState;
  isError: typeof defaultInputFieldsErrorState;
  handleInputChange: (type: InputTypes, value: string) => void;
}

const BirthdayInput: React.FC<BirthdayInputProp> = ({
  inputState,
  isError,
  handleInputChange,
}) => {
  return (
    <div className="age-calculator-birthday">
      <div className="age-calculator-birthday-inputs">
        {inputFields.map((field, index) => (
          <InputField
            key={`${field.type}-${index}`}
            type={field.type as InputTypes}
            title={field.title}
            errorMessage={isError[field.type] ? field.errorMessage : ""}
            value={inputState[field.type]}
            handleInputChange={handleInputChange}
            isError={isError[field.type] || isError.date}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      {isError.date && (
        <h3 className="age-calculator-birthday-error">{datErrorMessage}</h3>
      )}
    </div>
  );
};

export default BirthdayInput;
