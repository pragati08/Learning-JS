function main() {
  // Define the array to be processed
  const array = [2, 4, 6, 2, 7, 8];

  function square(num) {
    return num * num;
  }

  function customMap() {
    let newArr = [];

    for (let i of array) {
      let s = square(i);
      newArr.push(s);
    }

    return newArr;
  }

  return customMap();
}

console.log(main());
