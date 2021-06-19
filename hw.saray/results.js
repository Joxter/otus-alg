import seedrandom from 'seedrandom';
import { time } from '../test-runner.js';
import { maxSarah_N4 } from './sarah_N4.js';

const rng = seedrandom('sarah');

/*
                                  O(n^4)
Size:  1000, Factor:  5;  time: 0:00.449, area: 70
Size:  1000, Factor: 10;  time: 0:01.769, area: 178
Size:  1000, Factor: 20;  time: 0:05.536, area: 297
Size:  1000, Factor: 30;  time: 0:12.450, area: 451
Size:  2000, Factor:  5;  time: 0:01.648, area: 78
Size:  2000, Factor: 10;  time: 0:06.162, area: 144
Size:  2000, Factor: 20;  time: 0:23.205, area: 338
Size:  2000, Factor: 30;  time: 0:47.642, area: 481
Size:  5000, Factor:  5;  time: 0:09.345, area: 96
Size:  5000, Factor: 10;  time: 0:33.901, area: 204
Size:  5000, Factor: 20;  time: 2:05.637, area: 407
Size:  5000, Factor: 30;  time: 5:37.856, area: 574
Size: 10000, Factor:  5;  time: 0:41.354, area: 94
Size: 10000, Factor: 10;  time: 2:31.935, area: 216
Size: 10000, Factor: 20;  time: --------, area:
Size: 10000, Factor: 30;  time: --------, area:
*/
for (let size of [1000, 2000, 5000, 10000]) {
  for (let factor of [5, 10, 20, 30]) {
    testSarah(size, factor, maxSarah_N4);
  }
}

function testSarah(size, factor, sarahFn) {
  const map = generateMap(size, factor);

  const start = Date.now();
  const area = sarahFn(map);
  const duration = Date.now() - start;

  const params = `Size: ${String(size).padStart(5, ' ')}, Factor: ${String(factor).padStart(2, ' ')}`;
  console.log(`${params};  ${time(duration)}, area: ${area}`);
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