// conversion of one dataType to another dataType....
var  a = 33;
console.log( typeof (a) )

let b = '123'
console.log(typeof b )

// b is a string data type 
// the step to converting data type 
let valueInNumber = Number(b)
console.log(typeof valueInNumber )

//let r = Number(b)
//let ber = Number(b)
// let Number = Number(b)

// there are  mainly imp.. three cases in type _conversion in js 
// 1 . NaN
/*   code 
         let a = '123abc'
         let b = Number(a)
         console.log(typeof b )
         console.log(b)
    output
        number
        NaN

*/
// 2 . null 
/**
 *    let  a= null
 *     console.log(typeof a )
 */

// boolean 
/**
 *   let boolean = 'veeresh'
 * let BOOLen = Boolen(boolen)
 * console.log(BOOLEan)
 
  output
    if 
       1 ==> true or 0 ==> false
       '' ==> false //empty string 
       
*/
// imppp
console.log('1'+2 );
console.log(1+'2' );
console.log('1'+2+2);
console.log(1+2+'2');
/*  output
    12
    12
    122
==> 32  notee
*/
// console.log(true+);// output : error
   console.log(+true);// output : 1 
   console.log(true);// output : true
   console.log(+''); // output : 0
 // strudy postfrix and prefix in js ^
