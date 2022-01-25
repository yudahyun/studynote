let numOfApples = 123;
 //현재 갖고 있는 사과의 수

 var basket =  numOfApples/10 ;
// 사과 바구니는 사과수 10으로 나눔

numOfApples %= 10;
//사과 10개로 나눈 나머지

numOfApples < 10 ? basket++ : basket;
//10보다 작으면 1 , 아니면 0
