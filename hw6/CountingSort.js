import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.007
 * Test #5   [OK]  time: 0:00.040
 * Test #6   [OK]  time: 0:00.453
 * Test #7   [OK]  time: 0:05.293
 */
testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testCountingSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.001
 * Test #5   [OK]  time: 0:00.008
 * Test #6   [OK]  time: 0:00.095
 * Test #7   [OK]  time: 0:01.087
 */
testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testCountingSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.004
 * Test #5   [OK]  time: 0:00.040
 * Test #6   [OK]  time: 0:00.375
 * Test #7   [OK]  time: 0:04.082
 */
testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testCountingSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.002
 * Test #5   [OK]  time: 0:00.023
 * Test #6   [OK]  time: 0:00.372
 * Test #7   [OK]  time: 0:04.044
 */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testCountingSort);


export function countingSort(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  const counters = Array(max + 1).fill(0);
  const result = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }

  for (let i = 1; i < counters.length; i++) {
    counters[i] = counters[i] + counters[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    counters[arr[i]]--;
    result[counters[arr[i]]] = arr[i];
  }

  return result;
}

function testCountingSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = countingSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}