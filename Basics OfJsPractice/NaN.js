// NaN is a number which result in adding a number  with non numeric number... result in Nan
// typeof a NaN is ==> Number
// NaN + number = NaN
// NaN + string = NaNstring

let a = 10
let b = 100
let c = a+b
console.log(c); //110

let x = "100"
let y = 10;
let z = x+y
console.log(z); //10010

let p = 10
let q = "100"
let r = p-q
console.log(r); //-90

let xy = NaN
let xz = 10
let xyz = xy + xz
console.log(xyz); //NaN

let yx = NaN
let zx = "10"
let zxy = yx + zx
console.log(zxy); // NaN10

console.log(typeof NaN); // number