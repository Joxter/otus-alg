import seedrandom from 'seedrandom';
import { time } from '../test-runner.js';
import { maxSarah_N4 } from './sarah_N4.js';
import { maxSarah_N3 } from './sarah_N3.js';
import { maxSarah_N2 } from './sarah_N2.js';
import { maxSarah_N2_leetcode } from './sarah_N2_leetcode.js';

const rng = seedrandom('sarah');

/*

У n^2 оптимизированная версия это потому что первоначальная была такая наивная черновая,
расчет ширин и высот можно делать внутри основного цикла по рядам, а не всё делать отдельно,
это дало почти двухкратный рост производительности.

Забавно, что аналогичная оптимизация расчета высот для n^3 алгоритма сделало код медленнее (не коммитил)

ПС. на Литкоде https://leetcode.com/problems/maximal-rectangle/discuss/?currentPage=1&orderBy=most_votes&query=
нашлись способы более простого расчета ширин

UPD. Подставил некоторые решения, ищ литкода и несколько выводов:
- некоторые решения "faster 100%" на самом деле не очень оптимальные,
  и на больших данных (size 2к+) показывают время как O(n^4), хотя
  выглядят компактно и быстрые на мелких масштабах
- вязл одно реально оптимальное решение и смог его немного, но заметно
  (на 30%) улучшить простой заменой "Math.max(a,b)" на "a > b ? a : b"
  оригинальный код: https://leetcode.com/problems/maximal-rectangle/discuss/452868/JavaScript-DP-O(n)-Time-and-Space

Выводы:
- в литкоде заплюсованные и крутые решения могут содержать ошибки
- функция Math.max медленнее чем тренарный оператор

                                                                   loop opts (leetcode)
                                  O(n^4)     O(n^3)      O(n^2)      O(n^2)        n^2
Size:  1000, Factor:  5;  time: 0:00.449,  0:00.082,   0:00.095,   0:00.073,  0:00.029,   square: 70
Size:  1000, Factor: 10;  time: 0:01.769,  0:00.128,   0:00.074,   0:00.047,  0:00.027,   square: 178
Size:  1000, Factor: 20;  time: 0:05.536,  0:00.144,   0:00.080,   0:00.061,  0:00.027,   square: 297
Size:  1000, Factor: 30;  time: 0:12.450,  0:00.209,   0:00.063,   0:00.044,  0:00.013,   square: 451
Size:  2000, Factor:  5;  time: 0:01.648,  0:00.248,   0:00.271,   0:00.189,  0:00.085,   square: 78
Size:  2000, Factor: 10;  time: 0:06.162,  0:00.405,   0:00.265,   0:00.177,  0:00.069,   square: 144
Size:  2000, Factor: 20;  time: 0:23.205,  0:00.643,   0:00.267,   0:00.184,  0:00.056,   square: 338
Size:  2000, Factor: 30;  time: 0:47.642,  0:00.801,   0:00.266,   0:00.174,  0:00.055,   square: 481
Size:  5000, Factor:  5;  time: 0:09.345,  0:01.692,   0:01.759,   0:01.154,  0:00.527,   square: 96
Size:  5000, Factor: 10;  time: 0:33.901,  0:02.561,   0:01.709,   0:01.139,  0:00.424,   square: 204
Size:  5000, Factor: 20;  time: 2:05.637,  0:04.297,   0:01.734,   0:01.140,  0:00.362,   square: 407
Size:  5000, Factor: 30;  time: 5:37.856,  0:05.364,   0:01.839,   0:01.093,  0:00.334,   square: 574
Size: 10000, Factor:  5;  time: 0:41.354,  0:05.992,   0:07.767,   0:04.867,  0:02.145,   square: 94
Size: 10000, Factor: 10;  time: 2:31.935,  0:09.287,   0:07.581,   0:04.983,  0:01.724,   square: 216
Size: 10000, Factor: 20;  time: --------,  0:15.911,   0:07.249,   0:04.505,  0:01.441,   square: 402
Size: 10000, Factor: 30;  time: --------,  0:20.876,   0:07.232,   0:04.471,  0:01.337,   square: 624
*/
for (let size of [1000, 2000, 5000, 10000]) {
  for (let factor of [5, 10, 20, 30]) {
    testSarah(size, factor, maxSarah_N2_leetcode);
  }
}

function testSarah(size, factor, sarahFn) {
  const map = generateMap(size, factor);

  const start = Date.now();
  const square = sarahFn(map);
  const duration = Date.now() - start;

  const params = `Size: ${String(size).padStart(5, ' ')}, Factor: ${String(factor).padStart(2, ' ')}`;
  console.log(`${params};  ${time(duration)}, square: ${square}`);
}

function generateMap(size, factor) {
  let map = [];
  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = +(Math.floor(rng() * factor) === 0);
    }
  }
  return map;
}