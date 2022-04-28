import React from "react";

const Practice03 = () => {
  const createDescription = (count) => {
    let li = [];
    let bit = 1;
    for (let i = 1; i < count +1; i++) {
      bit *= 2;
      li.push(
        <li key={i}>
          {/* 이진수 {i}개는 {item}개의 정보 표시가능 */}
          이진수 {i}개는 {bit}개의 정보 
        </li>
      );
    }
    return li;
  };

  return (
    <ul>
    {createDescription(10)}
    </ul>
  );
};

export default Practice03;
