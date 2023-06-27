// FIZZ BUZZ

"use strict";

var numbers = [];
var y = 0;

for (let i = 0; i < 100; i++) {
  y++;
  numbers[i] = y;

  if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
    numbers[i] = "Fizz";
  } else if (numbers[i] % 5 === 0 && numbers[i] % 3 !== 0) {
    numbers[i] = "Buzz";
  } else if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
    numbers[i] = "FizzBuzz";
  }
}

console.log(numbers);

// differen approach

var numbers = [];
var i = 0;

function pushArray() {
  i++;

  if (i % 3 === 0 && i % 5 !== 0) {
    numbers.push("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    numbers.push("Buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    numbers.push("FizzBuzz");
  } else {
    numbers.push(i);
  }

  console.log(numbers);
}
