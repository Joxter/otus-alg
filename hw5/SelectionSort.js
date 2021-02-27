import { testRunner } from '../test-runner.js';

/**
 * Перемешаннй массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.001
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.005
 * Test #4   [OK]  time: 0:00.120
 * Test #5   [OK]  time: 0:14.536
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testSelectionSort);

/**
 * Перемешаный массив длиной N из значений от 0 до 9
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.049
 * Test #5   [OK]  time: 0:04.405
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testSelectionSort);

/**
 * Почти полностью отсортированный массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.051
 * Test #5   [OK]  time: 0:04.667
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testSelectionSort);

/**
 * Обратно отсортированный массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.001
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.062
 * Test #5   [OK]  time: 0:05.869
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testSelectionSort);

// console.log(selectionSort([34, 4, 93, 2, 58, 462, 98, 37]));

function selectionSort(arr) {
  // console.log('>', arr.join(', '));
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
    // console.log('>', arr.join(', '));
  }

  return arr;
}

function testSelectionSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = selectionSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
