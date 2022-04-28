import React from "react";

const Practice02 = () => {
  const value = 456;
  let calc = value * 0.01;

  calc = Math.floor(calc);
  calc *= 100;
//   console.log(calc);

  return <div>{calc}</div>;
};

export default Practice02;
