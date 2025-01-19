/**   dataTypes types 
 *    1 primitive : 
 *                  1 string    2 boolean  3 null  4 number  5 undefined 
 *                  6 Symbol    7  bigInt  
 *                
 * 
 * 
 *   2 nonPrimitive
 *                   1  Arrya 2 objects  3 functions  
 * 
 *    ** javaScript is a dynamically or  
 * 
 */

 // using symbols 
 let id = Symbol('123')
 let anotherid = Symbol('123')

 console.log( id === anotherid) // output : false [ symbols are not same when we give same data]

 // bigInt representation 
let bigNumber = 11222324434344337n
 console.log(typeof bigNumber) // output : bigInt



 // Nonprimitive type
 // 1 array
  const hero = ['veeresh', ' siddu ', ' vbc']

  // 2 object creating
   let myObj  = {
                name :' k b c ',
                rollNo : 234, 
                age  : 23
               }

 // 3 functions ... you can treat a function like a variable
  const myFunction = function() {
   
                      console.log('  hello veeresh ..');
                    }

// note  return typeOf array is Object 
// note  return typeOf object is Object
// note  return typeOf Function is ObjectFunction 


// Memory in js 
// types  1 Stack Memory( primitive dataAType) : copy of variable 
//        2 Heap Memory(NonPrimitive dataType) : reference of a variable
