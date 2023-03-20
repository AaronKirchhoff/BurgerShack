/* chat GPT asked me to write a function that takes in a string and return the string in reverse order.*/

function Reverse(str){
  return str.split('').reverse().join('')
};
console.log(Reverse('Hello'));

function EvenSum(arr) {
  sum = 0
  for(let i = 0; i<arr.length; i++){
    if (arr[i] % 2 == 0)
    sum+= arr[i]
  }
  return sum;
};
console.log(EvenSum([1,2,3,4,5,6,7,8,9]))
// 