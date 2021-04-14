import React, { MouseEventHandler } from "react";

interface Props {
  first: string;
  second: string;
  onPlus: () => void;
  onMinus: () => void;
  onMultiple: () => void;
  onDevide: () => void;
}

function Controller({
  first,
  second,
  onPlus,
  onMinus,
  onMultiple,
  onDevide,
}: Props) {
  const operation: MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      <button onClick={operation}>+</button>
      <button onClick={operation}>-</button>
      <button onClick={operation}>*</button>
      <button onClick={operation}>/</button>
    </div>
  );
}

export default Controller;
