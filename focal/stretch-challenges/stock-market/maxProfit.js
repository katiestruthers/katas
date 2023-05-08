// Strategy 1: brute force
// const maxProfit = function(array) {
//   let profit = -1;

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1 + i; j < array.length; j++) {
//       if (array[j] - array[i] > profit) {
//         profit = array[j] - array[i];
//       }
//     }
//   }

//   return profit;
// };

// Strategy 2: divide & conquer
const maxProfit = function(array) {
  let highest = 0;
  let lowest = Number.MAX_VALUE;
  let highestPos = array.length - 1;
  let lowestPos = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > highest && i > lowestPos && array[i] - lowest > 0) {
      highest = array[i];
      highestPos = i;
    }
    if (array[i] < lowest && i < highestPos) {
      lowest = array[i];
      lowestPos = i;
    }
  }

  return highest - lowest;
};

module.exports = maxProfit;