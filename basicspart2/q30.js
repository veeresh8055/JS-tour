// use for..in loop to interate over an object and log its keys 
let obj ={
    name : 'Veeresh',
    class : "Bsc CS",
    RollNo : 234,
    marks : 99.99,
    collge : " Kss College ",
    location : 'gadag'
}
console.log(obj.RollNo)

for (const key in obj) {
     console.log(obj[key])
     console.log(key)
}

// output :
// name
// class
// RollNo
// marks
// collge
// location