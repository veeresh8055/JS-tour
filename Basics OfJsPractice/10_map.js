//  what is the purpose of using map() mathod in js :
//               a map() method in js is used t create  new array by applying a specified function to each element in an 
//                existing array....


let arr = [1,2,3,4,5]

//  let a = arr.map( function (val){
//     return val*4
// }
// )
let a = arr.map(num => num *2)
console.log(a)
console.log(arr)