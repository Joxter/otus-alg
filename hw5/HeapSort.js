import { testRunner } from '../test-runner.js';

/**
 * Перемешаннй массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.001
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.007
 * Test #5   [OK]  time: 0:00.058
 * Test #6   [OK]  time: 0:00.681
 * Test #7   [OK]  time: 0:09.329
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testHeapSort);

/**
 * Перемешаный массив длиной N из значений от 0 до 9
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.006
 * Test #5   [OK]  time: 0:00.032
 * Test #6   [OK]  time: 0:00.304
 * Test #7   [OK]  time: 0:03.280
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testHeapSort);

/**
 * Почти полностью отсортированный массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.003
 * Test #4   [OK]  time: 0:00.006
 * Test #5   [OK]  time: 0:00.053
 * Test #6   [OK]  time: 0:00.550
 * Test #7   [OK]  time: 0:06.390
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testHeapSort);

/**
 * Обратно отсортированный массив длиной N из значений от 0 до N-1
 *
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.002
 * Test #4   [OK]  time: 0:00.006
 * Test #5   [OK]  time: 0:00.054
 * Test #6   [OK]  time: 0:00.548
 * Test #7   [OK]  time: 0:06.233
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testHeapSort);

function heapSort(arr) {
  for (let root = Math.floor(arr.length / 2) - 1; root >= 0; root--) {
    moveMaxToRoot(root, arr.length);
  }

  for (let j = arr.length - 1; j >= 0; j--) {
    const t = arr[0];
    arr[0] = arr[j];
    arr[j] = t;

    moveMaxToRoot(0, j);
  }

  return arr;

  function moveMaxToRoot(root, size) {
    let X = root;
    const L = 2 * root + 1;
    const R = L + 1;

    if (L < size && arr[L] > arr[X]) X = L;
    if (R < size && arr[R] > arr[X]) X = R;
    if (X === root) return;

    const t = arr[X];
    arr[X] = arr[root];
    arr[root] = t;

    moveMaxToRoot(X, size);
  }
}

function testHeapSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = heapSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
