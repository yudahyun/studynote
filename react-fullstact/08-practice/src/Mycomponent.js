import React from "react";
import propTypes from "prop-types";

const Mycomponent = ({ name, age, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br />
      나이는 {age} 입니다.
      <br />
      children 값은 {children}입니다.
    </div>
  );
};

Mycomponent.defaultProps = {
  name: "기본이름",
};
Mycomponent.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired
};
export default Mycomponent;
