abc()   // hoisting 

function abc(){
    console.log("veershhh")
}


let a = function (){
    return  console.log("vBc")

}
a()
//~~~~~~~~~~arrow function~~~~~~~~~ 
//this
const obj =  {
    name : "veeresh",
    age : 23,
    greet : function(){
        console.log(`${this.name},welcomme to website`)
    }
}
obj.greet()
obj.name="kiran"
obj.greet()

// console.log(this) output innode is 'empty object' and in console it is 'window'

const kiranPrint = ()=>{
    console.log("kiran is great")
}
// kiranPrint()

// ~~~~~~~Arrow Function~~~~~~~``
// const add = (num1,num2)=>{
//   return num1 +num2
// }
const add = (num1,num2)=>num1 +num2  //2nd type todefine a arrow function..
console.log(add(7,4))