import React, { useEffect, useState } from "react";
import { isNumber, calculate } from "./logic/calculate";

import Display from "./display";
import Warning from "./warning";
import ButtonsContainer from "./buttonsContainer";

import "./calculator.css";

const Calc = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [badDivision, setBadDivision] = useState(false);

  useEffect(() => {
    if (badDivision) {
      setTimeout(() => {
        setBadDivision(false);
      }, 3000);
    }
  }, [badDivision]);

  const maxLength = 20;

  const updateState = async (obj, key) => {
    if (obj.next !== null && obj.next.length >= maxLength && isNumber(key)) {
      return;
    }

    let newObj = {};
    try {
      newObj = await calculate(obj, key);
    } catch (error) {
      newObj.total = "Undefined";
    }

    if (newObj.total === "Undefined") {
      setBadDivision(true);
      setCalc({ total: null, next: null, operation: null });
    } else {
      setCalc((preObj) => ({ ...preObj, ...newObj }));
    }
  };

  const handleClick = (obj, e) => {
    updateState(obj, e.target.dataset.name);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
  };

  const { total, next, operation } = calc;

  return (
    <>
      <div className="calc">
        <Display total={total} next={next} operation={operation} />
        <ButtonsContainer
          click={(e) => handleClick(calc, e)}
          keyDown={handleKeyDown}
        />
      </div>
      <Warning warning={badDivision} />
    </>
  );
};

export default Calc;
