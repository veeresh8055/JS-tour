// 5. possible ways to create an Objects
// 6. diff in var let and const ..
// 4 ways to create an Object ..


// 1ST WAY 
var a = {}// object literal
// 2nd way
var ans = Object.create(null);//by Using Object create method...
//3rd way 
function abc(){
    this.name = "veeresh"
    console.log(this.name)
}
new abc();
//4th Way
class Abcd{
    constructor(){}
    a = 12;
}
var ans = new Abcd();
console.log(ans)