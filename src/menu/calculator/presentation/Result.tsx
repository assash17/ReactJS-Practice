import React from "react";

interface Props {
  result: number;
}
function Result({ result }: Props) {
  return (
    <div>
      <span>result: </span>
      <span>{result}</span>
    </div>
  );
}

export default Result;
