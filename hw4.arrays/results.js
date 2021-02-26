import { MatrixArray } from './code.js';


const arr = new MatrixArray(5);
for (let i = 0; i < 8; i++) {
  arr.add(i);
}
arr.log();

console.log('-------------', arr.remove(3));
console.log('-------------', arr.remove(3));
console.log('-------------', arr.remove(3));
arr.log();

// arr.add(10, 3);
arr.add(10);
arr.log();


// const start = Date.now();
// const arr = new MatrixArray(5);
// for (let i = 0; i < 8; i++) {
//   arr.add(i);
// }
// const duration = Date.now() - start;
