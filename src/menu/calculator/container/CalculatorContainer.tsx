import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalculatorPresentation from "../presentation/CalculatorPresentation";
import { RootState } from "../../../reducer/index";
import { plus, minus, multiple, divide } from "../../../reducer/calc";

function CalculatorContainer() {
  const [first, setfirst] = useState<string>("");
  const [second, setsecond] = useState<string>("");
  const { result } = useSelector((state: RootState) => state.calc);
  const dispatch = useDispatch();
  const onPlus = () => {
    dispatch(plus(Number(first), Number(second)));
  };
  const onMinus = () => {
    dispatch(minus(Number(first), Number(second)));
  };
  const onMultiple = () => {
    dispatch(multiple(Number(first), Number(second)));
  };
  const onDevide = () => {
    dispatch(divide(Number(first), Number(second)));
  };
  return (
    <CalculatorPresentation
      first={first}
      second={second}
      result={result}
      setfirst={setfirst}
      setsecond={setsecond}
      onPlus={onPlus}
      onMinus={onMinus}
      onMultiple={onMultiple}
      onDevide={onDevide}
    ></CalculatorPresentation>
  );
}

export default CalculatorContainer;
