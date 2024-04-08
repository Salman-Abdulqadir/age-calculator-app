import React from "react";
import cake from "../../assets/birthday-cake.svg";
import "./AgeResult.scss";

interface AgeResultProp {
  result: { years: string; months: string; days: string } & {
    [keys: string]: string;
  };
}
const AgeResult: React.FC<AgeResultProp> = ({ result }) => {
  return (
    <div className="age-calculator-result-container">
      <div className="age-calculator-results">
        {Object.keys(result).map((key, index) => {
          return (
            <h4 className="age-calculator-result" key={`${index}-${key}`}>
              <span>{result[key]}</span>
              {key}
            </h4>
          );
        })}
      </div>
      <img src={cake} alt="cake" />
    </div>
  );
};

export default AgeResult;
