import seedrandom from 'seedrandom';
import { time } from '../test-runner.js';
import { maxSarah_N4 } from './sarah_N4.js';

const rng = seedrandom('sarah');



console.log('O(n^4)');
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