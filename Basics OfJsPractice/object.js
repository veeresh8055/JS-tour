
// ~~~~~~~~~ Defining a object literal~~~~~~~~~~
 const marks = Symbol("")

let student = {
     firstName : "Veeresh",
     lastName : "Chared",
     RollNo : 234 ,
     [marks] : "veeresh",
     greeting : function(){
        console.log("Hello Js User....!")
     },
     fullName : function(){
            return this.firstName +""+ this.lastName
     }
}

console.log(student)
console.log(student.greeting) //undefined 
console.log(student.greeting()) //hello Js user...!
console.log(student.fullName())

console.log(student[marks])

student.comment = function() {
     console.log(`Hi Js User ${this.firstName + this.lastName} , welcome to this master course....`)
}
console.log(student.comment())

const object = {1:"3",2:"2"}
const object1 = {4:"3",5:"3"}

const object3 = {...object,...object1}
console.log(object3)