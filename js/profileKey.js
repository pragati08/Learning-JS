function main() {
  // Example usage:
  const userProfile1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    city: "New York",
    street: "123 Main St",
    zipCode: "10001",
  };

  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    city: "L.A",
    street: "154 Washington Road",
    zipCode: "10011",
  };

  function getUserInfo(profile, key) {
    // Check if the key exists in the object
    // write your code here
    if (profile[key]) {
      return profile[key];
    } else {
      return "Not available";
    }
  }

  console.log(getUserInfo(userProfile1, "name")); // Output: "John Doe"
  console.log(getUserInfo(userProfile2, "city")); // Output: "L.A"
  console.log(getUserInfo(userProfile1, "phoneNumber")); // Output: "Not available"

  return getUserInfo;
}

main();
