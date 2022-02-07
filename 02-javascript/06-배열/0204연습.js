//역순

let data = [2,6,9,7,3,1];

for (let i = 0; i < data.length/2;i++){
    //반대편
    const k = data.length - i -1;
    //바꿔
    const tmp = data[k];
    data[k] = data[i];
    data[i] = tmp;
    
}
console.log(data);