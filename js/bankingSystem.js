// Implementation of getter and setter in js

function main() {
  //create your class here with the name Account with all the private properties and getter and setter
  class Account {
    #accountNumber;
    #balance;
    constructor(accountNumber) {
      this.#accountNumber = accountNumber;
      this.#balance = 0;
    }

    get getbalance() {
      return this.#balance;
    }

    setbalance(bal) {
      if (bal > 0) {
        return (this.#balance = bal);
      } else {
        return `Please enter a positive value for the balance`;
      }
    }

    deposit(val) {
      return (this.#balance = this.#balance + val);
    }

    withdraw(val) {
      if (val < this.#balance) {
        return (this.#balance = this.#balance - val);
      } else {
        return `Insufficient balance`;
      }
    }
  }

  const myAccount = new Account("1234567890");
  myAccount.setbalance(-300);

  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getbalance); // output: 300
  //Do not modify the return statement
  return Account;
}
main();
