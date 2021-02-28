import { testRunner } from '../test-runner.js';

/**
 * Перемешаннй массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.005
 * Test #5   [OK]  time: 0:00.044
 * Test #6   [OK]  time: 0:00.542
 * Test #7   [OK]  time: 0:06.851
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testShellSort);

/**
 * Перемешаный массив длиной N из значений от 0 до 9
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.003
 * Test #5   [OK]  time: 0:00.017
 * Test #6   [OK]  time: 0:00.175
 * Test #7   [OK]  time: 0:02.000
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testShellSort);

/**
 * Почти полностью отсортированный массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.004
 * Test #5   [OK]  time: 0:00.041
 * Test #6   [OK]  time: 0:00.502
 * Test #7   [OK]  time: 0:05.898
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testShellSort);

/**
 * Обратно отсортированный массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.005
 * Test #5   [OK]  time: 0:00.038
 * Test #6   [OK]  time: 0:00.373
 * Test #7   [OK]  time: 0:04.481
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testShellSort);

function shellSort(arr) {
  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = 0; i + gap < arr.length; i++) {
      let j = i + gap;
      let tmp = arr[j];

      while (j - gap >= 0 && arr[j - gap] > tmp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = tmp;
    }
  }

  return arr;
}

function testShellSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = shellSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
