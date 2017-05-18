'use strict';

// let counter = 0;
//
// const interval = setInterval(function() {
//   console.log(`Called ${++counter} times`);
//   if (counter === 7) {
//     clearInterval(interval);
//   }
// }, 1000);

process.stdin.on('data', function(d) {
  console.log(d.toString().toUpperCase());
});
