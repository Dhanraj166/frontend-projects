
function checkInternet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const online = true;

      if (online) {
        resolve("Internet connected ");
      } else {
        reject("No internet connection ");
      }
    }, 1000);
  });
}

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User logged in ");
    }, 1000);
  });
}

function checkStock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stockAvailable = true;

      if (stockAvailable) {
        resolve("Product in stock ");
      } else {
        reject("Product out of stock ");
      }
    }, 1500);
  });
}

function processPayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const paymentSuccess = true;

      if (paymentSuccess) {
        resolve("Payment successful ");
      } else {
        reject("Payment failed ");
      }
    }, 2000);
  });
}

function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order placed successfully ");
    }, 1000);
  });
}

function sendConfirmation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Confirmation message sent ");
    }, 1000);
  });
}

checkInternet()
  .then(result => {
    console.log(result);
    return loginUser();
  })
  .then(result => {
    console.log(result);
    return checkStock();
  })
  .then(result => {
    console.log(result);
    return processPayment();
  })
  .then(result => {
    console.log(result);
    return placeOrder();
  })
  .then(result => {
    console.log(result);
    return sendConfirmation();
  })
  .then(result => {
    console.log(result);
    console.log("Order completed successfully!");
  })
  .catch(error => {
    console.log("Error:", error);
  });

