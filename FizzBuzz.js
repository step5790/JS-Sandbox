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
