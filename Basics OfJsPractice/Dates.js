const my = new Date()

console.log(my)
let myTimeStamp =Date.now()
console.log(myTimeStamp)
console.log(my.getTime())
// converting into second
console.log( Math.floor( Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth()+1)
// ${newDate.getMonth()+1} is the Month of this year

newDate.toLocaleDateString('default',{
    weekday: "long"
})
console.log(newDate.weekday)