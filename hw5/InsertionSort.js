import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.013
 * Test #4   [OK]  time: 0:00.032
 * Test #5   [OK]  time: 0:02.204
 * Test #6   [OK]  time: 4:03.828
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testInsertionSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.021
 * Test #5   [OK]  time: 0:01.963
 * Test #6   [OK]  time: 3:48.684
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testInsertionSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.002
 * Test #4   [OK]  time: 0:00.005
 * Test #5   [OK]  time: 0:00.090
 * Test #6   [OK]  time: 0:06.589
 *
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testInsertionSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.048
 * Test #5   [OK]  time: 0:04.402
 * */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testInsertionSort);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while ((j >= 0) && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function testInsertionSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = insertionSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
