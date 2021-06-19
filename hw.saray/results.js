import seedrandom from 'seedrandom';
import { time } from '../test-runner.js';
import { maxSarah_N4 } from './sarah_N4.js';
import { maxSarah_N3 } from './sarah_N3.js';
import { maxSarah_N2 } from './sarah_N2.js';

const rng = seedrandom('sarah');

/*
                                  O(n^4)     O(n^3)      O(n^2)
Size:  1000, Factor:  5;  time: 0:00.449,  0:00.082,   0:00.095,  square: 70
Size:  1000, Factor: 10;  time: 0:01.769,  0:00.128,   0:00.074,  square: 178
Size:  1000, Factor: 20;  time: 0:05.536,  0:00.144,   0:00.080,  square: 297
Size:  1000, Factor: 30;  time: 0:12.450,  0:00.209,   0:00.063,  square: 451
Size:  2000, Factor:  5;  time: 0:01.648,  0:00.248,   0:00.271,  square: 78
Size:  2000, Factor: 10;  time: 0:06.162,  0:00.405,   0:00.265,  square: 144
Size:  2000, Factor: 20;  time: 0:23.205,  0:00.643,   0:00.267,  square: 338
Size:  2000, Factor: 30;  time: 0:47.642,  0:00.801,   0:00.266,  square: 481
Size:  5000, Factor:  5;  time: 0:09.345,  0:01.692,   0:01.759,  square: 96
Size:  5000, Factor: 10;  time: 0:33.901,  0:02.561,   0:01.709,  square: 204
Size:  5000, Factor: 20;  time: 2:05.637,  0:04.297,   0:01.734,  square: 407
Size:  5000, Factor: 30;  time: 5:37.856,  0:05.364,   0:01.839,  square: 574
Size: 10000, Factor:  5;  time: 0:41.354,  0:05.992,   0:07.767,  square: 94
Size: 10000, Factor: 10;  time: 2:31.935,  0:09.287,   0:07.581,  square: 216
Size: 10000, Factor: 20;  time: --------,  0:15.911,   0:07.249,  square: 402
Size: 10000, Factor: 30;  time: --------,  0:20.876,   0:07.232,  square: 624
*/
for (let size of [1000, 2000, 5000, 10000]) {
  for (let factor of [5, 10, 20, 30]) {
    testSarah(size, factor, maxSarah_N4);
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