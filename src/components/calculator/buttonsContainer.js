import React from "react";
import PropTypes from "prop-types";
import CalculatorButton from "./calculatorButton";

const ButtonsContainer = (props) => {
  const { click, keyDown } = props;
  return (
    <div
      className="calculator-btns-container"
      onClick={click}
      onKeyDown={keyDown}
      aria-hidden="true"
    >
      <CalculatorButton name="clear" value="AC" />
      <CalculatorButton name="sign" value="+/-" />
      <CalculatorButton name="percentage" value="%" />
      <CalculatorButton name="division" value="÷" colored />

      <CalculatorButton name="number" value="7" />
      <CalculatorButton name="number" value="8" />
      <CalculatorButton name="number" value="9" />
      <CalculatorButton name="mult" value="x" colored />

      <CalculatorButton name="number" value="4" />
      <CalculatorButton name="number" value="5" />
      <CalculatorButton name="number" value="6" />
      <CalculatorButton name="substr" value="-" colored />

      <CalculatorButton name="number" value="1" />
      <CalculatorButton name="number" value="2" />
      <CalculatorButton name="number" value="3" />
      <CalculatorButton name="sum" value="+" colored />

      <CalculatorButton name="number" value="0" span={2} />
      <CalculatorButton name="floating" value="." />
      <CalculatorButton name="result" value="=" colored />
    </div>
  );
};

ButtonsContainer.propTypes = {
  click: PropTypes.func,
  keyDown: PropTypes.func,
};

ButtonsContainer.defaultProps = {
  click: () => -1,
  keyDown: () => -1,
};

export { ButtonsContainer as default };
