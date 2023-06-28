function fibonacciGenerator(n) {
  var array = [];
  var sum;

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      array.push(i);
    } else if (i === 1) {
      array.push(i);
    } else {
      sum = parseInt(array.slice(-1)) + parseInt(array.slice(-2));
      array.push(sum);
    }
  }
  console.log(array);
}
