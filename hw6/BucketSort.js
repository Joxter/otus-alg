import { testRunner } from '../test-runner.js';

/**
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', (str) => {
//   const [k, arrStr] = str.trim().split('\n');
//   const result = bucketSort(arrStr.split(' ').map(n => +n), k);
//   return result.join(' ');
// });

/**
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', (str) => {
//   const [, arrStr] = str.trim().split('\n');
//   const result = bucketSort(arrStr.split(' ').map(n => +n), 1);
//   return result.join(' ');
// });

/**
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', (str) => {
//   const [k, arrStr] = str.trim().split('\n');
//   const result = bucketSort(arrStr.split(' ').map(n => +n), Math.log10(+k));
//   return result.join(' ');
// });

/**
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', (str) => {
//   const [k, arrStr] = str.trim().split('\n');
//   const result = bucketSort(arrStr.split(' ').map(n => +n), Math.log10(+k));
//   return result.join(' ');
// });


export function bucketSort(arr, max) {
  let myArr = Array.from({length: arr.length}).fill(null);
  max++;

  for (let i = 0; i < arr.length; i++) {
    const myN = Math.floor(arr[i] * arr.length / max);

    if (myArr[myN] === null) {
      myArr[myN] = [arr[i]];
    } else {
      const ind = myArr[myN].findIndex((val) => val < arr[i]);

      myArr[myN].splice(ind + 1, 0, arr[i]);
    }
  }

  return myArr.flat().filter((it ) => it !== null);
}
