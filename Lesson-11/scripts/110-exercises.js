// 11o. Create array, loop over it. check if straing 'search' is in array. if yes, console.log the index, if not consolelog -1.
// 11p. modify so if 'search' appear multiple time, it will console.log index of first appearance.
const kata = ['hello', 'world', 'search', 'search', 'good'];
let index = -1;
for (let i = 0; i < kata.length; i++) {
  const temuan = kata[i];
  if (kata[i] === 'search') {
    index = i;
    break; // 11p.
  } 
};
console.log(index);
 
// 11q. create function findIndex. with array, word parameter. search the word inside the array and return index of the first appearance of the string. if it doesnt exist return -1.
function findIndex(array, word) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }

  };
  return index;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));