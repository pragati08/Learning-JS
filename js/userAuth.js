// Instructions:
// 1. Implement the login method on the User prototype.
// 2. Create a reusable loginFunction using the bind method, bound to the systemCredentials object.
function User(displayName) {
  this.displayName = displayName;
}

const systemCredentials = {
  username: "system",
  password: "pass123",
};
User.prototype.login = function (checkUsername, checkPassword) {
  // Implement the code here
  if (
    systemCredentials.username === checkUsername &&
    systemCredentials.password === checkPassword
  ) {
    console.log("Login successful!");
  } else {
    console.log("Login failed!");
  }
};

// Example usage:
const user = new User("John Doe");
// Create the reusable loginFunction here
function loginFunction() {
  return User.loginFunction.bind(systemCredentials);
}

loginFunction("system", "pass123"); // Expected output: "Login successful!"
loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"
