// ~~~~~~~~~~ Defining a singleton Object~~~~~~~~``
const student = new Object()// this is a singleton object.....
const student1 = {} //this is a object literal.......

console.log(student) // outpt {} is same but they are different..
console.log(student1)

// ~~~~~~~~~~~~Nested Object~~~~~~~~~~~~~~

const user = {
    firstName: "veeresh",
    lastName: "chared",
    RollNo: 234,
    fullname: function() {
        const name = "veeeeee";
        const add = "chared cc";
        const mastName = function() {
            return name + add;
        };
        return mastName();
    }
};

console.log(user.fullname());

// ~~~~~~~~~~~~~~Concat of two Object~~~~~~~~~~~~
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

// Using a spredoperator 
const obj3 = {...obj1,...obj2}
console.log(obj3)

// using concatnation
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

// ~~~~~~~~~~~~~~~`Making objects to array~~~~~~~~~~~~
// looping with Key Values ...
console.log(Object.keys(obj1))
console.log(obj1)
// Looping with values 
console.log(Object.values(obj2))
console.log(obj2)

// ~~~~~~~~~~~~~ Object DeStructuring ~~~~~~~~~~~`

const { 1 : vbc, 2:kbc , 3:sbc} = obj1
console.log(vbc)
console.log(sbc)
console.log(kbc)



