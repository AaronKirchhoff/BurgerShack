/* chat GPT asked me to write a function that takes in a string and return the string in reverse order. then I exported the function so I could read it elsehwere in my app*/

export function Reverse(str){
  return str.split('').reverse().join('')
};
console.log(Reverse('Hello'));

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
// console.log(mySquare(4))

const mySquare2 = val => Math.pow(val, 2);
// console.log(mySquare2(5))

const mySum = arr => arr.reduce((a, b) => a + b, 0)
// console.log(mySum([4,7,6,8,9]))

// chatGPT asked me to write a function that takes in two paramters, of numbers. and returns the larger of the two
function great(x,y){
  if ( x > y){
    return x;
  }
  return y;
}
// console.log(great(456,821))

// Write a function in JavaScript that takes in a string as a parameter and returns the most frequent character in the string. If there are multiple characters that appear with the same maximum frequency, return the one that appears first.

// im going to define an object and create key value pairs as i go, increasing the value by one everytime the key reoccurs. this is a frequency counter. then I search for all tha values and make an array of them. Use math.max to find the biggest number, set it equal to the variable big. then seearch the object keys and find where the key if equal to big and return that chracter!

function mostCommonChar (str){
  let myObj = {};
  let newArr = Array.from(str);
  for(let num of newArr){
    myObj[num] = myObj[num] + 1 || 1
  }
  let thisArr = Object.values(myObj)
  let big = Math.max(...thisArr)
  return Object.keys(myObj).find(key => myObj[key] === big);
}
console.log(mostCommonChar('abracadabra'))


function evenNums (arr){
  let evenArr = [];
  for (let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
      evenArr.push(arr[i])
    }
  }
  return console.log(evenArr);
}
// evenNums([3,6,7,8,5,4,3,2,6,7,8,4,1,9])

function match (arr1, arr2){
  let ans = [];
  for(let i=0; i<arr1.length; i++){
    for(let m=0; m<arr2.length; m++){
      if(arr1[i] == arr2[m]){
        ans.push(arr2[m])
      }
    }
  }
  return ans;
}
console.log(match([2,3,4,7,6], [1,9,4,3,2]))

function match2(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}


