import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.007
 * Test #4   [OK]  time: 0:00.047
 * Test #5   [OK]  time: 0:00.160
 * Test #6   [OK]  time: 0:01.846
 * Test #7   [OK]  time: 0:20.687
 */
testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testMergeSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.001
 * Test #4   [OK]  time: 0:00.011
 * Test #5   [OK]  time: 0:00.130
 * Test #6   [OK]  time: 0:01.498
 * Test #7   [OK]  time: 0:17.256
 */
testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testMergeSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.001
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.002
 * Test #4   [OK]  time: 0:00.018
 * Test #5   [OK]  time: 0:00.165
 * Test #6   [OK]  time: 0:01.699
 * Test #7   [OK]  time: 0:19.603
 */
testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testMergeSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.001
 * Test #4   [OK]  time: 0:00.011
 * Test #5   [OK]  time: 0:00.159
 * Test #6   [OK]  time: 0:01.734
 * Test #7   [OK]  time: 0:19.687
 */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testMergeSort);

function mergeSort(arr) {
  sort(0, arr.length - 1);
  return arr;

  function sort(L, R) {
    if (L >= R) return;
    const X = Math.floor((L + R) / 2);

    sort(L, X);
    sort(X + 1, R);

    merge(L, X, R);
  }

  function merge(L, X, R) {
    const M = Array.from({ length: R - L + 1 }); // можно оптимизировать: создать вспомонательный массив один раз
    let a = L;
    let b = X + 1;
    let m = 0;

    while (a <= X && b <= R) {
      if (arr[a] < arr[b]) {
        M[m++] = arr[a++];
      } else {
        M[m++] = arr[b++];
      }
    }
    while (a <= X) {
      M[m++] = arr[a++];
    }
    while (b <= R) {
      M[m++] = arr[b++];
    }

    for (let i = L; i <= R; i++) {
      arr[i] = M[i - L];
    }
  }
}

function testMergeSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = mergeSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}