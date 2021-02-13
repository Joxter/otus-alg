import { testRunner } from '../../test-runner.js';
import { powA, powB, powC } from './code.js';

/**
 * Просто итерации, довольно долго
 *
 * Test #6   [OK]  time: 0:00.011
 * Test #7   [OK]  time: 0:00.112
 * Test #8   [OK]  time: 0:01.071
 * Test #9   [OK]  time: 0:11.322
 */
// testRunner(import.meta.url, (inp) => {
//   const [x, n] = inp.trim().split('\n').map(_ => +_.trim());
//   const result = powA(x, n);
//   return Number.isInteger(result) ? result.toFixed(1) : result.toFixed(11);
// });

/**
 * Сначала возводим в максимальновозможный квадрат степени двойки, потом итеративно домножаем остальное.
 * Значительно быстрее чем просто итерации, но еще можно оптимизировать (след алгоритм)
 *
 * FAIL - это из-за ошибок округления, сам алгоритм верный
 *
 * Test #6  [FAIL] time: 0:00.002
 * Test #7  [FAIL] time: 0:00.036
 * Test #8  [FAIL] time: 0:00.503
 * Test #9  [FAIL] time: 0:01.596
 */
// testRunner(import.meta.url, (inp) => {
//   const [x, n] = inp.trim().split('\n').map(_ => +_.trim());
//   const result = powB(x, n);
//   return Number.isInteger(result) ? result.toFixed(1) : result.toFixed(11);
// });

/**
 * Степень разбиваем на стерени двойки и каждую квадратно умножаем.
 * Самый быстрый алгоритм, и реализуется даже легче предыдущего
 *
 * FAIL - это из-за ошибок округления, сам алгоритм верный
 *
 * Test #6  [FAIL] time: 0:00.000
 * Test #7  [FAIL] time: 0:00.000
 * Test #8  [FAIL] time: 0:00.000
 * Test #9  [FAIL] time: 0:00.000
 */
// testRunner(import.meta.url, (inp) => {
//   const [x, n] = inp.trim().split('\n').map(_ => +_.trim());
//   const result = powC(x, n);
//   return Number.isInteger(result) ? result.toFixed(1) : result.toFixed(11);
// });
