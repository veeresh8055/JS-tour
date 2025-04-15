function getter(inp,value=1){ // we are using a default parameter 1 in value 
  let cloned =[]               // creating a empty array and we push the elements in this array

  for(var i = 0 ; i<value;i++){
    cloned.push(inp[i])
  }
  return cloned
}

console.log(getter([1,2,3,4,5],8));  // important to notice..........
console.log(getter([1,2,3,4,5],8));
console.log(getter([1,2,3,4,5],-3)); // it gives empty array