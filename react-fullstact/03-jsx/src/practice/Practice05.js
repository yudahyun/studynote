import React from "react";

const Practice05 = () => {
  // Q1. make a string out of an array

  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();

  // Q2. make an array out of a string

  const fruits2 = "🍎, 🥝, 🍌, 🍒";
  const result2 = fruits2.split(",");
  console.clear();
  console.log("결과값의 타입은 %j 이다.", typeof result2);
  const result3 = JSON.stringify(result2);
  console.log(result3);

  // Q3. make this array look like this: [5, 4, 3, 2, 1]

  const array = [1, 2, 3, 4, 5];
  const result4 = array.reverse();
  console.log(result4);

  // Q4. make new array without the first two elements

  const array2 = [1, 2, 3, 4, 5];
  const result5 = array2.splice(2, 5);

  console.group();
  console.log(array2);
  console.groupEnd();

  const array3 = [1, 2, 3, 4, 5];
  const result6 = array2.slice(2, 5);
  console.group();
  console.log(array3);
  console.log(result6);
  console.groupEnd();

  // class Student {
  //   constructor(name, age, enrolled, score) {
  //     this.name = name;
  //     this.age = age;
  //     this.enrolled = enrolled;
  //     this.score = score;
  //   }
  // }

  // const students = [
  //   new Student('A', 29, true, 45),
  //   new Student('B', 28, false, 80),
  //   new Student('C', 30, true, 90),
  //   new Student('D', 40, false, 66),
  //   new Student('E', 18, true, 88),
  // ];
  const students = {
    student: [
      { name: "A", age: 29, enrolled: true, score: 45 },
    { name: "B", age: 28, enrolled: false, score: 80 },
    { name: "C", age: 30, enrolled: true, score: 90 },
    { name: "D", age: 40, enrolled: false, score: 66 },
    { name: "E", age: 18, enrolled: true, score: 88 },
  ]
  }
  // Q5. find a student with the score 90
  const result7 = students.find((student) => student.score === 90);


  // Q6. make an array of enrolled students

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]

  // Q8. check if there is a student with the score lower than 50

  // Q9. compute students' average score

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'

  return (
    <div>
      <p>{result}</p>
      <p>{result2}</p>
      <p>{result3}</p>
      <p>{result4}</p>
      <p>{result5}</p>
      <hr/>
      <p>{result7}</p>
    </div>
  );
};

export default Practice05;
