/* chat GPT asked me to write a function that takes in a string and return the string in reverse order. then I exported the function so I could read it elsehwere in my app*/

//  export function Reverse(str){
//   return str.split('').reverse().join('')
// };
// console.log(Reverse('Hello'));

// export function EvenSum(arr) {
//   let sum = 0
//   for(let i = 0; i<arr.length; i++){
//     if (arr[i] % 2 == 0)
//     sum+= arr[i]
//   }
//   return sum;
// };
// console.log(EvenSum([1,2,3,4,5,6,7,8,9]))
// 

// below im using the math.pow() class method is a method on the bigger class of ??? hmm. it built in
function mySquare(val) {
  return (val ** 2)
}
console.log(mySquare(4))

const mySquare2 = val => Math.pow(val, 2);
console.log(mySquare2(5))

const mySum = arr => arr.reduce((a, b) => a + b, 0)
console.log(mySum([4,7,6,8,9]))




