// write a js function whih checks an input is an array or not

// Array.isArray(a) is a function which return the given input is array or not 
function arrayCheck(a){
    let b =Array.isArray(a)
    if (b==true){
        console.log("is a array");

    }
    else{
        console.log("its not an array");
    }
}

arrayCheck([1])

// 2nd method to check the array
// when ever we creaate  an array it is aalways given a blueprint or an instance which is array
// ==>  [ ] instanceof Array

function abc(inp){
    return inp instanceof Array;
}
console.log(abc([12,3,4,4]))
console.log(abc(1))
console.log(abc({w:"a"}))