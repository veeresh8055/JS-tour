 let a = ['veevve','eee','jeehh','ehehh']

 a.forEach(
    function (e){
       console.log( e.toUpperCase())
       console.log(e.toLowerCase())
       console.log(e.charAt(2))
    }
 )

 let b = a.map( function (val){
    return     val - "kal" 
 })
 console.log(b)
 // when we multiply a string with the number it gives NaN 
 // number * number = number 
 // number * string = NaN 
 // string * string = NaN
 // string + string = String 
 // string - string = NaN 
 