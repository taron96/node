'use strict';

const speak = function(arr) {
  const newArr = [];
  for (var i of arr) {
    newArr.push(i.toUpperCase());
  }
  console.log(i);
  return newArr;
}

const a = speak(['foo', 'bar', 'baz']);
console.log(a);
