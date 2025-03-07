function main() {
  // Define the array to be processed
  const array = [2, 4, 6, 2, 7, 8];

  function square(num) {
    return num * num;
  }

  // Create the customMap function with two arguments
  function customMap(array, square) {
    let newArr = [];

    for (let i of array) {
      let s = square(i);
      newArr.push(s);
      console.log(newArr);
    }
    // Create an empty(new) array to store the results.
    // Iterate over each element in the input array with the help of loop
    // Inside the loop Apply the callback function to the current element
    // Add the result to the new array with the help of push method
    // Return the new array outside the loop with the modified values

    return newArr;
  }
  customMap(array, square);
}

main();
// function square(num) {
//   return num * num;
// }

// // Create the customMap function with two arguments
// function customMap() {
//   let newArr = [];

//   for (let i of array) {
//     let s = square(i);
//     newArr.push(s);
//   }
//   return newArr;
// }
