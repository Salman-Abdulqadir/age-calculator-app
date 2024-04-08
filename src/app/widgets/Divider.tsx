import arrowIcon from "../../assets/icon-arrow.svg";

import "./Divider.scss";

const Divider = () => {
  return (
    <div className="age-calculator-divider-wrapper">
      <div className="age-calculator-divider"></div>
      <img
        className="age-calculator-divider-image"
        src={arrowIcon}
        alt="arrow-icon"
      />
    </div>
  );
};

export default Divider;
