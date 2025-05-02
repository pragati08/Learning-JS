// Square each number in the array.
// If the number is even, double its squared value.
// Return the transformed array.

const numbers = [2, 4, 6, 8, 7];

const newArr = numbers.map(transformNumbers);

function transformNumbers(numbers) {
  if (numbers % 2 === 0) {
    return numbers * numbers * 2;
  } else {
    return numbers * numbers;
  }
}

console.log(newArr);
