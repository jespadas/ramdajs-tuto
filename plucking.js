// The pluck function returns a new list by plucking the specified property off all objects in the list supplied.
import * as R from 'ramda';

const users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

// With the pluck function, we take the name and age properties and form two new lists.
console.info('log 1', R.pluck('age', users));
console.info('log 2', R.pluck('name', users));

//In the example we find out the oldest age of a person.
let maxAge = R.apply(Math.max, R.pluck('age', users));
// let maxAge = Math.max(... R.pluck('age', users));

console.log('log 3', `The oldest person is ${maxAge} years old.`);