// log the sum of digit given by the user
let n = 2029993;

let r;
let sum = 0;

while (n > 0) {
  r = 0;
  r = n % 10;

  sum += r;

  n = Math.floor(n / 10);
}
console.log("The sum is :", sum); // The sum is : 34
