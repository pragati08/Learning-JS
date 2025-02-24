// findHighestScore function that takes an array of scores as input.
// Use the reduce method to find the highest score in the array.
// Ensure your logic handles edge cases, such as arrays with only one element or duplicate highest scores.
// Return the highest score as the output.
// Define the array of student scores
const scores = [85, 90, 78, 188, 76, 95, 188];

function findHighestScore(s, num) {
  return num > s ? num : s;
}

const highNum = scores.reduce(findHighestScore);

console.log(highNum);
