// write afunction to clone an array 
function arrayClone(inp){
    const arr =[...inp]   // copying an array the best copy is using 'spread' Operator
    return arr
}
let a = [1,2,'2']
let arr =arrayClone(a)
console.log(arr) // [1,2,'2']

arr.pop() // it delete the last element in the array
console.log(arr) // final array [1,2]

console.log()
console.log()
console.log()


// ~~~~~~IMP Note~~~~~~~~~~
// copying 

   let array1 = [1,2,3,4]
   let array2 = array1 // it never copy it it makes a reference of array1
   console.log(array1)
   array2.pop()

   console.log(array2)
   console.log(array1)





