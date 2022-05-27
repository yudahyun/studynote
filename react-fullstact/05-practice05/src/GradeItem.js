import React from "react";
import PropTypes from "prop-types";

const GradeItem = ({ name, level, sex, kor, eng, math, sic }) => {
  const sum = kor + eng + math + sic;
  const avg = sum / 4;
  // console.log(Data);
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{level}</td>
        <td>{sex}</td>
        <td>{kor}</td>
        <td>{eng}</td>
        <td>{sic}</td>
        <td>{math}</td>
        <td>{sum}</td>
        <td>{avg}</td>
      </tr>
    </tbody>
  );
};

GradeItem.propTypes = {
  kor:PropTypes.number,
  eng:PropTypes.number,
  math:PropTypes.number,
  sic:PropTypes.number,
};

GradeItem.defaultProps = {
  kor: 0,
  eng: 0,
  math: 0,
  sic: 0,
};

export default GradeItem;
