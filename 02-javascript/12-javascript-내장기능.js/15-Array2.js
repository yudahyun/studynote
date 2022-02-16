let arr1 = [1,0,false];

console.log(arr1.indexOf(0));
//두번쨰니까 1 반환
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null));
//반환 못하니까 -1

console.log(arr1.includes(1));
//있는지 없는지만 반환 있으면 true
console.log(arr1.includes(11));
//없으면 false

const arr2=[NaN];
console.log(arr2.indexOf(NaN));
//=== 는 NaN에는 동작하지 않는다.
console.log(arr2.includes(NaN));


const arr3 = [5,12,8,131,44];
const found = arr3.find(function(v){
    //console.log(v);
    if(v%2 == 0){
        return true;
    }else{
        return false;
    }
});

console.log(found);
//5랑 12만 들어가니까 12에서 멈춤

const arr4 =[5,12,8,131,44];

const result = arr4.filter(function(v,i,arr){
    console.log("v=%d,i=%d,arr=%s",v,i,arr);
    if(v%2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(result);

const arr5 = [2,1,15];

arr5.sort(function(a,b){
   // console.log("a=%d,b=%d",a,b);
    if(a>b){
        return 1;
    }else{
        return -1;
    }
    
}); 
console.log(arr5);

let arr6 =[1,2,3,4,5];
arr6.reverse();
console.log(arr6);