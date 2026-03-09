let user = {
  id: 1,
  name: "Dhanraj",
  age: 22,
  city: "Chennai"
};

// create 
user.email = "dhanraj@gmail.com";              //Dot notaion
user["phone"] = "9876543210";                  //bracket notation


// Read 
console.log(user.city);
console.log(user["email"]);

// let key = "age";
// console.log(user[key]);


// UPDATE
user.age = 23;
user["city"] = "Trichy"



console.log(user);




let bankAccount = {
  name: "Dhanraj",
  balance: 5000,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(`Withdrawn ${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  },

  getDetails() {
    return {
      name: this.name,
      balance: this.balance,
      history: this.transactions
    };
  }
};

bankAccount.deposit(2000);
bankAccount.withdraw(1000);
console.log(bankAccount.getDetails());