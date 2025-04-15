//  //  what is 'this' 'call' and 'aply' 'bind'

//  //  1.this 
//  // ==>global = window
//   console.log(this) // object
//  // ==>function = window  
// //   function abc(){
// //     console.log(this)
// //   }
// //   abc() // window 
//  // ==>method = object
//     var obj = {
//         name : "veeresh",
//         age : 234,
//         greet : function a(){
//             console.log(this)
//         }
//     }
//    obj.greet();
   
//     // ==>func es5 inside method = window
//  // ==>es6 func inside method = object

// ~~~~~~~~~ Call Aply Bind~~~~~~~~~
// call ke help se function ko run karte waqt hum decide kar sakte hei kee 
// function ke andar this ki value kya hogi

  var obj = {
    name : "veeresh",
    age : 234
  }
  function abc(){
    console.log(this)
  }
  abc.call(obj)// abc()=>window abc.call()=>obj print
  