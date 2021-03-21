import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.006
 * Test #4   [OK]  time: 0:00.045
 * Test #5   [OK]  time: 0:03.649
 * Test #6   [OK]  time: 7:00.562
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testSelectionSort);

/**
 * Test #0   [OK]  time: 0:00.001
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.040
 * Test #5   [OK]  time: 0:03.589
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testSelectionSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.005
 * Test #4   [OK]  time: 0:00.043
 * Test #5   [OK]  time: 0:03.623
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testSelectionSort);

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.006
 * Test #4   [OK]  time: 0:00.046
 * Test #5   [OK]  time: 0:03.747
 * */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testSelectionSort);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      const t = arr[i];
      arr[i] = arr[min];
      arr[min] = t;
    }
  }

  return arr;
}

function testSelectionSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = selectionSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
