import { useEffect, useState } from "react";
import "./index.scss";
import {
  InputTypes,
  defaultAgeResults,
  defaultInputFieldsErrorState,
  defaultInputFieldsState,
} from "./utils";

//widgets
import AgeResult from "./widgets/AgeResult";
import BirthdayInput from "./widgets/BirthdayInput";
import Divider from "./widgets/Divider";
import Attribution from "./widgets/Attribution";

type InputStateType = { [keys: string]: string };
const AgeCalculator = () => {
  const [inputState, setInputState] = useState<
    InputStateType & typeof defaultInputFieldsState
  >(defaultInputFieldsState);

  const [results, setResults] = useState(defaultAgeResults);

  const [isError, setIsError] = useState(defaultInputFieldsErrorState);

  const calculateAge = (birthDate: Date) => {
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const birthMonth = birthDate.getMonth();
      const prevMonthLastDay = new Date(
        today.getFullYear(),
        birthMonth,
        0
      ).getDate();
      days = prevMonthLastDay + days;
      months--;
    }

    setResults({
      years: JSON.stringify(years),
      months: JSON.stringify(months),
      days: JSON.stringify(days),
    });
  };

  const handleInputChange = (type: InputTypes, value: string) => {
    setIsError((prev) => ({ ...prev, date: false }));
    if (!/^[0-9]*$/.test(value)) return;
    setInputState((previousState: typeof defaultInputFieldsState) => ({
      ...previousState,
      [type]: value,
    }));
    switch (type) {
      case "day":
        setIsError((prev) => ({ ...prev, day: parseInt(value) > 31 }));
        break;
      case "month":
        setIsError((prev) => ({ ...prev, month: parseInt(value) > 12 }));
        break;
      case "year":
        setIsError((prev) => ({
          ...prev,
          year: parseInt(value) > new Date().getFullYear(),
        }));
        break;
    }
  };

  useEffect(() => {
    if (!Object.values(inputState).every((field) => !!field)) {
      setResults(defaultAgeResults);
      return;
    }
    if (
      inputState.year.length > 3 &&
      Object.keys(isError).every((key) => key === "date" || !isError[key])
    ) {
      const [day, month, year] = Object.values(inputState).map((field) =>
        parseInt(field)
      );
      const date = new Date(year, month - 1, day);
      const isValid =
        !isNaN(date.getTime()) &&
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date < new Date();
      setIsError((prev) => ({ ...prev, date: !isValid }));
      if (isValid) {
        calculateAge(date);
      }
    }
  }, [inputState]);

  useEffect(() => {
    if (Object.values(isError).some((field) => field))
      setResults(defaultAgeResults);
  }, [isError]);

  return (
    <>
      <div className="age-calculator-wrapper">
        <div className="age-calculator">
          <BirthdayInput
            inputState={inputState}
            isError={isError}
            handleInputChange={handleInputChange}
          />
          <Divider />
          <AgeResult result={results} />
        </div>
      </div>
      <Attribution />
    </>
  );
};

export default AgeCalculator;
