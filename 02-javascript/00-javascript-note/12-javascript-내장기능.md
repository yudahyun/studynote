## javascript 내장 기능
### # 01 isNaN
###### isNaN = 숫자가 아니다 = ture
> 빈 문자열은 0이다. 
```javascript
const 빈숫자배열 = ""; 
      빈숫자배열.isNaN() // 0
const 숫자아님 = "ㅎ"; // ture
const 숫자배열 = "1" // false
```

### # 02 parseFloat
###### 문자열을 실수로 변환한다.
> 변환이 되지 않는 경우는 NaN
```javascript
const 숫자 = 1.23
      숫자.parseFloat() // 1.23 
```

### # 03 parseInt
###### 문자열의 소수점 숫자 삭제한다.
> ()안에 숫자 넣으면 그만큼은 냅둔다
```javascript
const 숫자 = "1.234" ;
    숫자.parseInt(1) // 1.2
```

### # 04 encodeURl
###### 문자열을 인코딩한다.
> 특수문자는 미포함된다.
```javascript
const 입력값 = "123456안녕";
    입력값.encodeURL() // 인코딩한문자들~~ 
```

### # 05 encodeURl
###### 특수문자 포함 모든 문자를 인코딩 한다.
> decode로 하면 되돌아간다
```javascript
const 입력값 = "123456안녕!@!##%#$^";
    입력값.encodeURL() // 인코딩한문자들~~ 
```

### # 06 setTimeout(함수,숫자)
###### 함수를 정해진시간 뒤에 실행한다.
> 나중에 실행되기 때문에 건너뜀
```javascript
setTimeout(()=> {
    1.5초 뒤에 실행될 구문~
},1500);
```
### # 07 setInterval(함수,숫자)
###### 함수를 정해진 시간만큼 무한 반복한다.
> clearInterval() 로 전달
```javascript
const 반복함수 = setInterval(()=>{
    if(끝나는 기준){
        clearInterval(반복함수);
    }
});
```

### # 08 string
###### 1. chartAt(숫자)
>숫자값에 있는 문자열 반환
```javascript
const 메세지 = "message";
메세지.charAt(1) //e
```

###### 2.indexOf("아무거나")
>"아무거나"있는 위치 반환 \
>("아무거나",1) 2번째 위치 반환
```javascript
const 메세지 = "message";
메세지.indexOf("m"); //0
메세지.indexOf("z"); //-1 
```
###### 3.lasgIndexOf("아무거나")
>"아무거나" 있는 마지막 위치 반환
```javascript
const 메세지 = "message";
메세지.lastIndexOf("e"); // 6
```
###### 4.substring(숫자);
>숫자위치에 있는거 전부터 반환\
>substing(0,숫자)0부터 숫자 위치에 있는거 전까지 반환
```javascript
const 메세지 = "message";
메세지.substring(0,2); // me
메세지.substring(2);   // sase
```
###### 5.trim
>문자열 앞 뒤에 공백 제거
```javascript
const 메세지 = "   message   ";
메세지.trim() // "message"
```

###### 6.split(",")
>괄호안에 기준으로 배열 만들기
```javascript
const 메세지 = "me,ssa,ge";
메세지.split(",");
```
###### 7.replace("","");
```javascript
const 메세지 = "me,ssa,ge";
메세지.replace(",","&"); // "me&ssa,ge"; 
```

###### 8.replaceAll("","");
```javascript
const 메세지 = "me,ssa,ge";
메세지.replaceAll(",","&"); // "me&ssa&ge"; 
```
### # 08 Math

###### 1.Math.max()
```javascript

```
###### 2.Math.min()
```javascript

```
###### 3.round()
```javascript

```
###### 4.ceil()
```javascript

```
###### 5.floor()
```javascript

```
###### 6.abs()
```javascript

```
###### 7.random()
```javascript

```




