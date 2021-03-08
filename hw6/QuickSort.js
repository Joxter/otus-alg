import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.001
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.002
 * Test #4   [OK]  time: 0:00.004
 * Test #5   [OK]  time: 0:00.042
 * Test #6   [OK]  time: 0:00.445
 * Test #7   [OK]  time: 0:05.167
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testQuickSort);

/**
 * Test #0   [OK]  time: 0:00.001
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.011
 * RangeError: Maximum call stack size exceeded
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testQuickSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.004
 * Test #5   [OK]  time: 0:00.056
 * Test #6   [OK]  time: 0:00.729
 * Test #7   [OK]  time: 0:08.921
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testQuickSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * RangeError: Maximum call stack size exceeded
 */
// testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testQuickSort);

function quickSort(arr) {
  sort(0, arr.length - 1);
  return arr;

  function sort(L, R) {
    if (L >= R) return;
    const X = split(L, R);

    sort(L, X - 1);
    sort(X + 1, R);
  }

  function split(L, R) {
    const pivot = arr[R];
    let a = L - 1;

    for (let m = L; m <= R; m++) {
      if (arr[m] <= pivot) {
        a++;

        const t = arr[a];
        arr[a] = arr[m];
        arr[m] = t;
      }
    }

    return a;
  }
}

function testQuickSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = quickSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}