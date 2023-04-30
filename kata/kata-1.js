const sumLargestNumbers = function(data) {
  let twoLargest = [0, 0];

  for (let i = 0; i < data.length; i++) {
    if (data[i] > twoLargest[0]) {
      twoLargest[1] = twoLargest[0];
      twoLargest[0] = data[i];
      continue;
    }
    
    if (data[i] > twoLargest[1]) {
      twoLargest[1] = data[i];
    }
  }

  return twoLargest[0] + twoLargest[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));