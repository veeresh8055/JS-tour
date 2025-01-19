var num = [1,2,3,4,5]

// .at(index)
// .push(value)
// .pop()
// .fill(value)
// .shift()
// .unshift(value)
// .reverse()
// .includes(value)
// .toString()
// .join("*")
// .splice(2,0,"i","p")
// .slice(1,4)
// .sort()

// .map( function )
// .filter( function )
// .find( function )
// .every( function )
// .reduce( function )




console.log(  num.at(0)  )

num.push(19)
console.log(  num ) 
console.log( num.push(10) )// 7 why .....?
console.log( num.push(7) )// 8 why .....?
console.log( num.push(1) )// 9 why .....?

console.log(num)
num.pop()
console.log(  num  )

// num.fill(4)
// console.log(num)// [4,4,4,4,4,4,4,4]

let a = num.map( (val)=>{
  return val * 5
})
console.log(a)

let b = num.filter( (val)=>{
   if (val > 8){
    return val
   }
})
console.log(b)

console.log( num.includes(7)) // true 

console.log(  num.join(" & "))

num.splice(1,0 ,"vee","resh") 
console.log(num)

console.log(num.sort())  // it sorts string alphabetically ==>  [1,10,19,2,3,4,5,7,'resh','vee']
