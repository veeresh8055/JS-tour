// // Js String Methods 
//     1. charAt(3)
//     2.concat("","vbc")
//     3.startsWith("v")
//     4.endsWith("h")
//     5.includes("x")
//     6.indexOf("e")
//     7.lastIndexOf("2")
//     8.match(/[A-Z]/g)
//     9.padStart(6,"?")
//     10.padEnd(6,"?")
//     11.repeat(3)
//     12.replace("sh","sshh")
//     13search("h")
//     14.slice(1,3)
//     15.split("")
//     16.substring(2,4)
//     17.toLowerCase()
//     18.toUpperCase()
//     19.trim()
//     20.trimStart()
//     21.trimEnd()
  


let word = "veeresh";

console.log(  word.charAt(7)  )  //=> empty space [ ]  , nextline

console.log(  word.charAt(2)  )  //=> 

console.log(  word.concat('','chared')  )  // => veereshchared

console.log(  word.startsWith("v"))// => true
console.log(  word.endsWith("h")) // => true

console.log(  word.includes('h'))// => true

console.log(   word.lastIndexOf("h")) //=>6
console.log(  word.lastIndexOf(1))//=> -1
console.log(  word.lastIndexOf(4))//  => -1
console.log(   word.lastIndexOf('e')) //=>4

// note about lastIndexOf and indexOf  diff 
  word.indexOf('e') // => 1
  word.lastIndexOf('e') // => 4

console.log(  word.match(/[A-Z]/g))  //=> null   no capital letters in 'veeresh'
console.log(  "Hello".match(/[A-Z]/g)) // => [ 'H' ]

console.log(  word.padStart(5,"?"))  //=> veeresh
console.log(  word.padStart(9,'=>')) // => =>veeresh
console.log(  word.padStart(9,'=>')) // => =>veeresh
console.log(  word.padStart(7,'=>')) // => veeresh

console.log(  word.padEnd(8,"?"))  // => veeresh?
console.log(  word.padEnd(10,"don")) // => veereshdon

console.log(  word.repeat(5)) //=> veereshveereshsveereshveereshveeresh   it repeats 5 times 

console.log( word.replace('sh','shreplaced')) //=> veereshreplaced  .. sh -> shreplaced

console.log(  word.search('e')) //=> 1   it return the index of the value 
console.log(  word.search('k')) //=> -1
console.log(  word.search("s")) //=> 5

// note the difference between the search() and indexOf()  and lastIndexOf()


// the split() makes string to array like ['v','e','e','r','e','s','h']  and we perform array methods in this 
console.log(  word.split(''))  // =>   ['v','e','e','r','e','s','h']
console.log(  word.split('')[1]) // => e
console.log(  word.split('')[5]) // => s
console.log(  word.split('')[9]) // => undefined


console.log( word.substring(1,4))
console.log(  word.substring(5)) // => sh
console.log(  word.substring(4)) // => esh

console.log(  word.toLowerCase()) //=> veeresh 
console.log(  word.toUpperCase()) // => VEERESH

  console.log(  word.trim()) // => veeresh
  console.log(  word.trimEnd()) // => veeresh 
  console.log(  word.trimStart()) //=> veeresh
