// setTimeout(()=>{}) , setInterval(()=>{}) , clearInterval(variable)  usage in javascript

let a = setTimeout(()=>{
    console.log('printing it after 2 second....')
},2000)
// clearInterval(a)


let b = setInterval(()=>{
    console.log('printing it in every 2 sec...')
},1000)

setTimeout(()=>{
    clearInterval(b)
},6000)