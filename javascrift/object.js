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




// let bankAccount = {
//   name: "Dhanraj",
//   balance: 5000,
//   transactions: [],

//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(`Deposited ${amount}`);
//   },

//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       this.transactions.push(`Withdrawn ${amount}`);
//     } else {
//       console.log("Insufficient balance");
//     }
//   },

//   getDetails() {
//     return {
//       name: this.name,
//       balance: this.balance,
//       history: this.transactions
//     };
//   }
// };

// bankAccount.deposit(2000);
// bankAccount.withdraw(1000);
// console.log(bankAccount.getDetails());



// Array Destructuring
let numbers = [1, 2, 3, 4, 5, 7, 8];

let [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]



let data = [1, [2, 3], 4];

let [a, [b, c], d] = data;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4



// object - CRUD operation with arrys
let inventory = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },

  getItems() {
    return this.items;
  },

  updateItem(index, newItem) {
    this.items[index] = newItem;
  },

  deleteItem(index) {
    this.items.splice(index, 1);
  }
};

inventory.addItem("Laptop");
inventory.addItem("Mobile");
inventory.updateItem(1, "Tablet");
// inventory.deleteItem(0);

console.log(inventory.getItems());