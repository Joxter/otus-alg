import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.001
 * Test #4   [OK]  time: 0:00.012
 * Test #5   [OK]  time: 0:00.048
 * Test #6   [OK]  time: 0:00.492
 * Test #7   [OK]  time: 0:05.215
 */
testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testRadixSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.001
 * Test #5   [OK]  time: 0:00.012
 * Test #6   [OK]  time: 0:00.114
 * Test #7   [OK]  time: 0:01.221
 */
testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testRadixSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.006
 * Test #5   [OK]  time: 0:00.043
 * Test #6   [OK]  time: 0:00.469
 * Test #7   [OK]  time: 0:05.324
 */
testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testRadixSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time : 0:00.000
 * Test #4   [OK]  time: 0:00.002
 * Test #5   [OK]  time: 0:00.029
 * Test #6   [OK]  time: 0:00.466
 * Test #7   [OK]  time: 0:05.317
 */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testRadixSort);

export function radixSort(arr) {
  let currentRadix = 10;
  let tempArr = Array(arr.length);
  const counters = Array(10);

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  max = max + 1;

  while (currentRadix <= max) {
    counters.fill(0);

    for (let i = 0; i < arr.length; i++) {
      counters[getDigitByRadix(arr[i], currentRadix)]++;
    }

    for (let i = 1; i < counters.length; i++) {
      counters[i] = counters[i] + counters[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const r = getDigitByRadix(arr[i], currentRadix);
      counters[r]--;
      tempArr[counters[r]] = arr[i];
    }

    for (let i = 0; i < tempArr.length; i++) {
      arr[i] = tempArr[i];
    }
    currentRadix *= 10;
  }

  return arr;
}

function getDigitByRadix(n, k) {
  return Math.floor((n % k) / (k / 10));
}

function testRadixSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = radixSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
