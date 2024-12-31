// 11a. Create array, modify last value to 99
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);


// 11b. Create function, takes array return lastvalue in the array.

function getLastValue(array){
  const lastValue = array.length -1
  return array[lastValue];
};
console.log(getLastValue([44,55,66,77]));



// 11c. Create Function, takes array return array where first and last value are swapped.
 // confused af, pass
 // do it later
function arraySwap (array) {
  const lastValue = array[array.length - 1];
  const firstValue = array[0];

  array[0] = lastValue;
  array[array.length -1] = firstValue;
  console.log(`11c ` + array);
};
arraySwap([1,20,22,24,5])

// 11d. Create FOR loop counts 0 to 10 but counts up by 2
for (let i = 0; i <= 10; i += 2) {
  console.log(`11D ` + i);
};

// 11e. Create FOR loop counts down from 5 to 0
for (let i = 5; i >= 0; i--) {
  console.log(`11E ` + i);
};

// 11f. do exer D and E but use while loops
let fd = 0
while (fd <= 10){
  console.log(`11fd ` + fd);
  fd += 2;
};

let fe = 5
while (fe >= 0){
  console.log('11fe ' + fe);
  fe--;
};

// 11g. create loop takes array of nums create new array each number increased by 1
numsG = [2, 32 , 42, 62];
addOne = [];

for (let g = 0; g < numsG.length; g++) {
value = numsG[g];
addOne.push(value + 1);
};

console.log(addOne);


// 11h. Create function takes array and return an array where each number is increased by 1
function addedOne (array) {
  let added = [];
  for (let h = 0; h < array.length; h++) {
    value = array[h];
    added.push(value + 1);
  };
  console.log(added);
};

addedOne([5,6,7,8,9]);
addedOne([-2,-1,0,99]);


// 11i. Create function takes array of numbers and num then return array  where each number is increased by num.
function addNum (array,num) {
  let added = [];
  for (let i = 0; i < array.length; i++) {
    added.push(array[i] + num);
    
  };
  return added;
};

console.log(addNum([1,2,3], 2));


// 11j. Create fuinction addArray takes 2 array of numbers and deach number in the arrays together
function addArrays(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++){
    let value1 = array1[i];
    let value2 = array2[i];

    result.push(value1 + value2);

  }; 
  return result;
};

console.log(addArrays([1,1,2], [1,1,3]));


// 11k. Create a function that takes array of numbers and return how many number in the array are greater than 0
function countPositive(array){
  let qttPositive = 0;

  for (let i = 0; i < array.length; i++){
    const nilai = array[i];
    if (nilai > 0){
      qttPositive++;
    };
  };
   return qttPositive;
};

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));


// 11l. Create function takes array of numbers and return object with min and max numbers in the array. use loop instead of Math.min
// 11m. update so handle null input
function minMax(array){
  let result = {
    smallest:  null,
    biggest: null
  }

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    

    if (result.smallest === null || value < result.smallest) {
      result.smallest = value;
    };

    if (result.biggest === null || value > result.biggest) {
      result.biggest = value;
    };
  }

  console.log(result);
}
minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([]);

// 11n. Create function countWords(words) takes array of strings and return object with how many times each string appeared.

// function countWords(words) {
//   const result = {};
  
//   let words = words;

// };