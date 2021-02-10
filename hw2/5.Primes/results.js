import { testRunner } from '../../test-runner.js';
import { primeA, primeB, primeC } from './code.js';

/**
 * Грубый перебор, на 13 тесте (1_000_000_000) уже не стал ждать конца
 *
 * Test #8   [OK]  time: 0:00.005
 * Test #9   [OK]  time: 0:00.009
 * Test #10  [OK]  time: 0:00.120
 * Test #11  [OK]  time: 0:03.041
 * Test #12  [OK]  time: 1:20.982
 * Test #13  -
 * Test #14  -
 */
// testRunner(import.meta.url, (inp) => {
//   return primeA(+inp.trim());
// });

/**
 * Перебор, но проверяем делимость только на найденные простые числа, быстрее чем грубый перебор,
 * но 13 тест все равно ждать очень долго
 *
 * Test #8   [OK]  time: 0:00.040
 * Test #9   [OK]  time: 0:00.011
 * Test #10  [OK]  time: 0:00.079
 * Test #11  [OK]  time: 0:01.519
 * Test #12  [OK]  time: 0:31.669
 * Test #13  -
 * Test #14  -
 */
// testRunner(import.meta.url, (inp) => {
//   return primeB(+inp.trim());
// });

/**
 * Эратосфен,  очень быстр, но на ноуте не хватает памяти чтоб это посчитать:)
 *
 * Test #8   [OK]  time: 0:00.004
 * Test #9   [OK]  time: 0:00.012
 * Test #10  [OK]  time: 0:00.081
 * Test #11  [OK]  time: 0:00.882
 * Test #12  [OK]  time: 0:12.313
 * Test #13  -
 * Test #14  -
 */
// testRunner(import.meta.url, (inp) => {
//   return primeC(+inp.trim());
// });

