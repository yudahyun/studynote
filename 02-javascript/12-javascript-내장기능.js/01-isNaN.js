//참
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({}));
console.log(isNaN("foo"));
console.log(isNaN("123abc"));

//거짓
console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN(37));
console.log(isNaN("37"));
console.log(isNaN("37.37"));
console.log(isNaN(""));
console.log(isNaN(" "));