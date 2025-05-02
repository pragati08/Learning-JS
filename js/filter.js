// JavaScript function that filters an array of words and returns a new array containing only the words with a length greater than or equal to a specified minimum length.

const words = ["apple", "banana", "kiwi", "grape", "watermelon"];
const minLength = 5;

// Function to filter words based on length
function filterLongWords(words, minLength) {
  // Use filter to return words that have a length greater than or equal to minLength
  let newArr = words.filter((word) => {
    return word.length >= minLength;
  });

  return newArr;
}

// Test the function
const result = filterLongWords(words, minLength);
console.log(result); // Output: ["apple", "banana", "grape", "watermelon"]
