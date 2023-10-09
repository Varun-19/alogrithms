/**
  Two number sum

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

  Sample input = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum  = 10

 */

const sampleInput = require("./SampleInput");
function twoNumberSum(array, targetSum) {
  let index1, index2;
  let convertedArrayToObject = {};
  /** Assuming parameter array will be of type array */
  array.forEach((element, index) => {
    convertedArrayToObject[element] = index;
  });
  for (let i = 0; i < array.length; i++) {
    let requiredSum = targetSum - array[i];
    if (convertedArrayToObject[requiredSum] && convertedArrayToObject[requiredSum] !== i) {
      index1 = i;
      index2 = convertedArrayToObject[requiredSum];
      break;
    }
  }
  return { index1, index2 };
}

function main() {
  Object.values(sampleInput).forEach(({ array, targetSum }, index) => {
    const { index1, index2 } = twoNumberSum(array, targetSum);
    if (index1 !== undefined && index2 !== undefined) {
      console.log(
        `Target sum formed from array ${array} and targetSum ${targetSum}
          element1, index1 ${array[index1]} ${index1} 
          element2, index2 ${array[index2]} ${index2}`
      );
    } else {
      console.log(`Target sum not found from array ${array} and targetSum ${targetSum}`)
    }
  });
}

main();
