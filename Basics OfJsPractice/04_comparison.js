// dont compare the  two diff dataTypes
console.log('2'>1); // out put : true

console.log(null < 0 )  // false
console.log(null == 0 )// false
console.log(null >= 0 )/**true because [ the reason is that an equality check == and comparison < > <= >= 
 work differently 
 comparison convert null to numb , treating it is 0.. thats why (3) null >= 0 is true and  null > 0 is false ]
*/
 //   { === } strickly comparison 
 console.log("2"==2)// true
 console.log("2"===2)// false