import { testRunner } from '../test-runner.js';

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.001
 * Test #4   [OK]  time: 0:00.010
 * Test #5   [OK]  time: 0:00.071
 * Test #6   [OK]  time: 0:00.762
 * Test #7   [OK]  time: 0:08.608
 */
testRunner('C:\\projects\\otus-alg\\hw5\\0.random\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = bucketSort(arrStr.split(' ').map(n => +n), k - 1);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.001
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.011
 * Test #5   [OK]  time: 0:00.066
 * Test #6   [OK]  time: 0:00.396
 * Test #7   [OK]  time: 0:04.228
 */
testRunner('C:\\projects\\otus-alg\\hw5\\1.digits\\', (str) => {
  const [, arrStr] = str.trim().split('\n');
  const result = bucketSort(arrStr.split(' ').map(n => +n), 9);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.000
 * Test #4   [OK]  time: 0:00.006
 * Test #5   [OK]  time: 0:00.059
 * Test #6   [OK]  time: 0:00.598
 * Test #7   [OK]  time: 0:06.759
 */
testRunner('C:\\projects\\otus-alg\\hw5\\2.sorted\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = bucketSort(arrStr.split(' ').map(n => +n), k - 1);
  return result.join(' ');
});

/**
 * Test #0   [OK]  time: 0:00.000
 * Test #1   [OK]  time: 0:00.000
 * Test #2   [OK]  time: 0:00.000
 * Test #3   [OK]  time: 0:00.004
 * Test #4   [OK]  time: 0:00.007
 * Test #5   [OK]  time: 0:00.063
 * Test #6   [OK]  time: 0:00.603
 * Test #7   [OK]  time: 0:06.596
 */
testRunner('C:\\projects\\otus-alg\\hw5\\3.revers\\', (str) => {
  const [k, arrStr] = str.trim().split('\n');
  const result = bucketSort(arrStr.split(' ').map(n => +n), k - 1);
  return result.join(' ');
});


export function bucketSort(arr, max) {
  let buckets = Array.from({length: arr.length}).fill(null);
  max = max + 1;

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor(arr[i] * arr.length / max);

    const newNode = {
      value: arr[i],
      next: null,
    };

    if (buckets[bucketIndex] === null) {
      buckets[bucketIndex] = newNode;
      continue;
    }

    let prev = null;
    let current = buckets[bucketIndex];

    while (current.value < arr[i]) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      newNode.next = current;
      prev.next = newNode;
    } else {
      newNode.next = buckets[bucketIndex];
      buckets[bucketIndex] = newNode;
    }
  }

  const result = Array.from({length: arr.length});
  let resultI = 0;
  for (let i = 0; i < buckets.length; i++) {
    let curr = buckets[i];
    while (curr) {
      result[resultI] = curr.value;
      resultI++;
      curr = curr.next;
    }
  }

  return result;
}
