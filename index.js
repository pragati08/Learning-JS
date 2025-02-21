function main() {
  const counter = (function () {
    //Define the private variable to store the count
    let count = 0;

    // Define the Increment function
    function increment() {
      count++;
      return `Count after increment: ${count}`;
    }

    // Define the Decrement function
    function decrement() {
      count--;
      return `Count after decrement: ${count}`;
    }

    // Return the increment and decrement functions as part of the counter object
    return { increment, decrement };
  })();

  return counter;
}

let counter = main();

counter.increment();
counter.increment();
counter.decrement();
