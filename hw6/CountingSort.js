import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.001
 * Test #4   [OK]  time: 0:00.012
 * Test #5   [OK]  time: 0:00.058
 * Test #6   [OK]  time: 0:00.654
 * Test #7   [OK]  time: 0:07.388
 */
testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = countingSort(arrStr.split(' ').map(n => +n), k);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.001
 * Test #5   [OK]  time: 0:00.015
 * Test #6   [OK]  time: 0:00.150
 * Test #7   [OK]  time: 0:01.615
 */
testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', (str) => {
  const [, arrStr] = str.trim().split('\n');
  const result = countingSort(arrStr.split(' ').map(n => +n), 10);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.005
 * Test #5   [OK]  time: 0:00.068
 * Test #6   [OK]  time: 0:00.581
 * Test #7   [OK]  time: 0:06.196
 */
testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = countingSort(arrStr.split(' ').map(n => +n), k);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.003
 * Test #5   [OK]  time: 0:00.041
 * Test #6   [OK]  time: 0:00.593
 * Test #7   [OK]  time: 0:06.153
 */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = countingSort(arrStr.split(' ').map(n => +n), k);
  return result.join(' ');
});


export function countingSort(arr, k) {
  const counters = Array.from({length: k}).fill(0);
  const result = Array.from({length: arr.length});

  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }

  for (let i = 1; i < k; i++) {
    counters[i] = counters[i] + counters[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    counters[arr[i]]--;
    result[counters[arr[i]]] = arr[i];
  }

  return result;
}
