import seedrandom from 'seedrandom';
import { time } from '../test-runner.js';

const rng = seedrandom('sarah');

testSarah(10, 5);
testSarah(20, 5);
testSarah(30, 5);
testSarah(10, 15);
testSarah(20, 15);
testSarah(30, 15);
testSarah(10, 25);
testSarah(20, 25);
testSarah(30, 25);

// for (let size of [1000, 2000, 5000, 10000]) {
//   for (let factor of [5, 10, 20, 30]) {
//     testSarah(size, factor);
//   }
// }

function testSarah(size, factor) {
  const map = generateMap(size, factor);

  const start = Date.now();
  const area = maxSarah(map);
  const duration = Date.now() - start;

  console.log(`Size: ${size}, Factor: ${factor}, ${time(duration)}, area: ${area}`);
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

function maxSarah(map) {
  let result = 0;

  let debugMap = JSON.parse(JSON.stringify(map));

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      let area = 0;
      debugMap[i][j] = area;

      if (map[i][j] === 1) continue;

      let height = map.length;
      let width = 0;
      while (map[i][j + width] === 0) {
        height = Math.min(heightAt(map, i, j + width), height);
        let a = (width + 1) * height;
        if (a > area) {
          area = a;
        }
        width++;
      }

      debugMap[i][j] = area;
      if (area > result) {
        result = area;
      }
    }
  }

  // console.log(map.map(row => row.join(', ')).join('\n'));
  // console.log('----------');
  // console.log(debugMap.map(row => row.join(', ')).join('\n'));

  return result;
}

function heightAt(map, i, j) {
  let height = 0;
  while (map[i - height] && map[i - height][j] === 0) {
    height++;
  }
  return height;
}