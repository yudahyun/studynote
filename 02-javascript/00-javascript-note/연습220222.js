//let arr = [10, 8, 10, 8, 8, 4];

class 표준편차 {
  constructor(arr) {
    this._arr = arr;
  }
  합계() {
    let sum = 0,
      avg = 0;

    for (let i in this._arr) {
      sum += this._arr[i];
    }
    avg = sum / this._arr.length;
    let arrSum = 0;
    let 분산 = 0;
    let 나누기 = this._arr.length - 1;
    let 표준편차 = 0;
    //자료수에서 평균값 빼기
    for (let j in this._arr) {
      this._arr[j] = this._arr[j] - avg;
      this._arr[j] = this._arr[j] * this._arr[j];
      arrSum += this._arr[j];
      분산 = arrSum / 나누기;
      표준편차 = Math.sqrt(분산);
    }
    console.log(표준편차);
  }

  //console.log(sum,avg);
  //합, 평균 구하기
}

const arr2 = new 표준편차([10, 8, 10, 8, 8, 4]);
arr2.합계();

