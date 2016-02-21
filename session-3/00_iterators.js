var colors = [ 'red', 'green', 'blue' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Iterating over an array
const iterable = [1, 2, 3];

for (let value of iterable) {
  console.log(value);
}

// Iterating over a string
const abc = "ABC";

for (let character of abc) {
  console.log(character);
}

// Any kind of object impllementing the following pattern
function makeCountDown(counter) {
  let _counter = counter;
  return {
    next: function() {
      const value = _counter--;
      const done = _counter <= 0;

      return {
        value,
        done
      };
    }
  }
}

const countdown = makeCountDown(5);
console.log(countdown.next()); // { value: 5, done: false }
console.log(countdown.next()); // { value: 4, done: false }
console.log(countdown.next()); // { value: 3, done: false }
console.log(countdown.next()); // { value: 2, done: false }
console.log(countdown.next()); // { value: 1, done: true }
console.log(countdown.next()); // { value: 0, done: true }

// for(let value of countdown) {
//  console.log(`${value}...`);
// }