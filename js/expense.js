// Demonstrate encapsulation in js
//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
  class ExpenseTracker {
    //Create your private properites here
    #expenses;
    #income;
    //Create a constructor function
    constructor(income) {
      this.#expenses = [];
      this.#income = income;
    }
    //create your private properties to calculate expenses
    #calculateTotalExpense(expObj) {
      let amtArr = [];
      for (let i in expObj) {
        amtArr.push(expObj[i].amount);
      }
      let exp = amtArr.reduce((total, num) => {
        return total + num;
      }, 0);
      return exp;
    }
    //Create your public properties here
    addExpense(name, amount, date) {
      const expenseObj = {
        name: name,
        amount: amount,
        date: date,
      };

      this.#expenses.push(expenseObj);
    }

    calculateBalance() {
      let totalExp = this.#calculateTotalExpense(this.#expenses);
      let balance = this.#income - totalExp;
      return balance;
    }
  }
  //The class should function accordingly.
  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500
  return ExpenseTracker;
}

main();
