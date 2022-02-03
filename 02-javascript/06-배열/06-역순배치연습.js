const data = [ 5,4,3,2,1 ];

const p = parseInt(data.length/ 2);

for(let i = 0 ; i <p;i++){
    data[i] = data.length - i -1;
    const tmp = data[i];
    
}
console.log(data);


const data1 = [5,4,3,2,1];
const p1 = parseInt(data1.length/2);

for(let i = 0; i < p;i++){
    data1[i] = data1.length - i -1;
    let tmp = data[i];
       
}
console.log(data1);