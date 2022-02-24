class Student {
  constructor(grade) {
    //  let grade = new Array();
    this._grade = grade;
  }
  // get grade() {
  //   return this._grade;
  // }
  // set grade(value) {
  //   this._grade = value;
  // }

  //평균
  getSumAvg() {
    var sum = 0,
      sumAvg = 0;

    for (let i in this._grade) {
      sum += this._grade[i];
    }
    sumAvg = sum / this._grade.length;
    return console.log("평균 : "+sumAvg);
  }
  //최하점과 최고점
  getMinMax() {
    let maxGrade = this._grade[0];
    let minGrade = this._grade[1];

    for (let i in this._grade) {
      if (maxGrade < this._grade[i]) {
        maxGrade = this._grade[i];
      } else if (minGrade > this._grade[i]) {
        minGrade = this._grade[i];
      }
    }
    return console.log( "최하점 : "+minGrade+"최고점 : "+ maxGrade);
  }
  //분산
  getVar() {
    var sum = 0,
      sumAvg = 0;

    for (let i in this._grade) {
      sum += this._grade[i];
    }
    sumAvg = sum / this._grade.length;
    //return console.log(sumAvg);
    //console.log(this.getSumAvg());
    var arrSum = 0;
    var 분산 = 0;
    var 나누기 = this._grade.length - 1;

    //자료수에서 평균값 빼기
    for (let i in this._grade) {
      this._grade[i] = this._grade[i] - sumAvg;

      this._grade[i] = this._grade[i] * this._grade[i];
      arrSum += this._grade[i];
      분산 = arrSum / 나누기;
    }
    return console.log("분산:",분산);
  }
  //표준편차
  getStd() {
    var sum1 = 0,
      sumAvg2 = 0;

    for (let i in this._grade) {
      sum1 += this._grade[i];
    }
    sumAvg2 = sum1 / this._grade.length;
    //return console.log(sumAvg);
    //console.log(this.getSumAvg());
    var arrSum2 = 0;
    var 분산 = 0;
    var 나누기 = this._grade.length - 2;
    var getStd = 0;
    //자료수에서 평균값 빼기
    for (let i in this._grade) {
      this._grade[i] = this._grade[i] - sumAvg2;
      this._grade[i] = this._grade[i] * this._grade[i];
      arrSum2 += this._grade[i];
      분산 = arrSum2 / 나누기  / 10;
      getStd = Math.sqrt(분산);
      }
     
    
    //console.log(분산);
    return console.log("표준편차 : ",getStd);
  }
}

var students = new Student([82, 76, 91, 98, 64]);

students.getSumAvg();
students.getMinMax();
students.getVar();
students.getStd();
