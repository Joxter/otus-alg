import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000       1
 * Test #1   [OK]  time: 0:00.000      10
 * Test #2   [OK]  time: 0:00.001     100
 * Test #3   [OK]  time: 0:00.004    1000
 * Test #4   [OK]  time: 0:00.144   10000
 * Test #5   [OK]  time: 0:15.728  100000
 * Test #6   -------------------  1000000
 * Test #7   ------------------- 10000000
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', testBubbleSort);

/**
 * Test #0   [OK]  time: 0:00.000       1
 * Test #1   [OK]  time: 0:00.000      10
 * Test #2   [OK]  time: 0:00.000     100
 * Test #3   [OK]  time: 0:00.005    1000
 * Test #4   [OK]  time: 0:00.140   10000
 * Test #5   [OK]  time: 0:15.558  100000
 * Test #6   -------------------  1000000
 * Test #7   ------------------- 10000000
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', testBubbleSort);

/**
 * Test #0   [OK]  time: 0:00.000       1
 * Test #1   [OK]  time: 0:00.000      10
 * Test #2   [OK]  time: 0:00.000     100
 * Test #3   [OK]  time: 0:00.003    1000
 * Test #4   [OK]  time: 0:00.053   10000
 * Test #5   [OK]  time: 0:04.597  100000
 * Test #6   [OK]  time: 8:17.348 1000000
 * Test #7   ------------------- 10000000
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', testBubbleSort);

/**
 * Test #0   [OK]  time: 0:00.000       1
 * Test #1   [OK]  time: 0:00.000      10
 * Test #2   [OK]  time: 0:00.001     100
 * Test #3   [OK]  time: 0:00.004    1000
 * Test #4   [OK]  time: 0:00.069   10000
 * Test #5   [OK]  time: 0:06.592  100000
 * Test #6   -------------------  1000000
 * Test #7   ------------------- 10000000
 * */
// testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', testBubbleSort);

function bubbleSort(arr) {
  for (let i = 1; i <= arr.length; i++) {
    const unsortedBorder = arr.length - i;
    for (let j = 1; j <= unsortedBorder; j++) {
      if (arr[j - 1] > arr[j]) {
        const t = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = t;
      }
    }
  }

  return arr;
}

function testBubbleSort(str) {
  const [, arrStr] = str.trim().split('\n');
  const result = bubbleSort(arrStr.split(' ').map(n => +n));
  return result.join(' ');
}
