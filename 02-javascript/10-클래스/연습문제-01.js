

class Student{
    constructor(kor,eng,math){
        this._kor = kor;
        this._eng = eng;
        this._math = math;
    }
    sum(){
        return this._kor+ this._eng + this._math;
    }
    avg(){
        return this.sum() / 3;
    }
}


  const grade =[
      ["철수",92,81,76],
      ["영희",72,95,84],
      ["민혁",80,86,98]
  ];

  const s1 =new Student(92,81,77);
  const s2 =new Student(72,95,98);
  const s3 =new Student(80,86,84);
  
  console.log("철수의 총점은 %d이고 , 평균은 %d 이다.",s1.sum(),s1.avg());
  console.log("영희의 총점은 %d이고 , 평균은 %d 이다.",s2.sum(),s1.avg());
  console.log("민혁의 총점은 %d이고 , 평균은 %d 이다.",s3.sum(),s1.avg());
