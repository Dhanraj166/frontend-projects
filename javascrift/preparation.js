for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}


for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

console.log([] + []);