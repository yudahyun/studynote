const data = [10,20,30,40,50];

//배열 맨끝에 추가
data.push(60,70);
console.log(data);

const k =data.pop();
console.log(k);//마지막 요소 리턴
console.log(data);//리스트에서 제거

const x = data.shift();
console.log(x);//맨 앞 요소 리턴
console.log(data);//리스트에서 제거

data.unshift(0,10); // 맨 앞 요소 추가
console.log(data); //리턴

const z = data.splice(2,3);
//2번쨰 위치부터 3개 잘라서 리턴
console.log(z);
console.log(data);

data.splice(0,2,"a","b","c");
//0번째부터 2개 제거하고 그 위치에 삽입
console.log(data);

data.splice(3,0,"d","e");
//3번째부터 삭제 안하고 그 위치에 삽입
console.log(data);

const a = [1,2];
const b = [3,4,5];
const c = [6,7,8,9];
const d = a.concat(b,c);//합친다

console.log(d);

