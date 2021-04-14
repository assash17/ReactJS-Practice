import React from "react";

interface Props {
  first: string;
  second: string;
  setfirst: (value: string) => void;
  setsecond: (value: string) => void;
}

function Input({ first, second, setfirst, setsecond }: Props) {
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
    </div>
  );
}

export default Input;
