import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.017
 * Test #5   [OK]  time: 0:00.156
 * Test #6   [OK]  time: 0:01.902
 * Test #7   [OK]  time: 0:23.247
 */
testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = radixSort(arrStr.split(' ').map(n => +n), Math.log10(+k));
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.002
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.004
 * Test #5   [OK]  time: 0:00.034
 * Test #6   [OK]  time: 0:00.205
 * Test #7   [OK]  time: 0:01.940
 */
testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', (str) => {
  const [, arrStr] = str.trim().split('\n');
  const result = radixSort(arrStr.split(' ').map(n => +n), 1);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.002
 * Test #4   [OK]  time: 0:00.017
 * Test #5   [OK]  time: 0:00.138
 * Test #6   [OK]  time: 0:01.920
 * Test #7   [OK]  time: 0:23.376
 */
testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = radixSort(arrStr.split(' ').map(n => +n), Math.log10(+k));
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.013
 * Test #5   [OK]  time: 0:00.160
 * Test #6   [OK]  time: 0:01.873
 * Test #7   [OK]  time: 0:23.135
 */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = radixSort(arrStr.split(' ').map(n => +n), Math.log10(+k));
  return result.join(' ');
});


export function radixSort(arr, r) {
  let currentRadix = 1;
  let result = Array.from({length: arr.length});
  const counters = Array.from({length: 10});

  while (currentRadix <= r) {
    counters.fill(0);

    for (let i = 0; i < arr.length; i++) {
      counters[getRadix(arr[i], currentRadix)]++;
    }

    for (let i = 1; i < counters.length; i++) {
      counters[i] = counters[i] + counters[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const r = getRadix(arr[i], currentRadix);
      counters[r]--;
      result[counters[r]] = arr[i];
    }

    arr = [...result];
    currentRadix++;
  }

  return arr;
}

function getRadix(n, k) {
  return Math.floor((n % (10 ** k)) / (10 ** (k - 1)));
}
