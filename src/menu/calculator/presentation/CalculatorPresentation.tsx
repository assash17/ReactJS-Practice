import React, { MouseEvent } from "react";

interface Props {
  first: string;
  second: string;
  result: number;
  setfirst: (value: string) => void;
  setsecond: (value: string) => void;
  onPlus: () => void;
  onMinus: () => void;
  onMultiple: () => void;
  onDevide: () => void;
}
function CalculatorPresentation({
  first,
  second,
  result,
  setfirst,
  setsecond,
  onPlus,
  onMinus,
  onMultiple,
  onDevide,
}: Props) {
  const operation = (e: MouseEvent) => {
    if (isNaN(Number(first)) || isNaN(Number(second))) {
      alert("숫자만 입력하세요");
      return;
    }
    switch ((e.target as HTMLElement).textContent) {
      case "+":
        onPlus();
        return;
      case "-":
        onMinus();
        return;
      case "*":
        onMultiple();
        return;
      case "/":
        onDevide();
        return;
    }
  };
  return (
    <div>
      <input
        type="text"
        value={first}
        onChange={(e) => {
          setfirst(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={second}
        onChange={(e) => {
          setsecond(e.target.value);
        }}
      ></input>
      <div>
        <button onClick={operation}>+</button>
        <button onClick={operation}>-</button>
        <button onClick={operation}>*</button>
        <button onClick={operation}>/</button>
      </div>
      <div>
        <span>result: </span>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default CalculatorPresentation;
