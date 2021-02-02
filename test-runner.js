import { readdirSync, readFileSync } from 'fs';
import { count } from './hw1/0.solution.js';
import { luckyTicketsCount } from './hw1/1.solution.js';

// const dataPath = './hw1/0.String/';
const dataPath = './hw1/1.Tickets/';

runner(dataPath, (inp) => String(luckyTicketsCount(inp)));

function runner(dataFolder, cb) {
  const files = readdirSync(dataFolder).filter((fileName) => fileName.includes('test'));

  let i = 0;

  console.log(`Start. folder "${dataFolder}"`);
  while (files.includes(testIn(i))) {
    const input = readFileSync(dataFolder + testIn(i)).toString().trim();
    const expected = readFileSync(dataFolder + testOut(i)).toString().trim();

    const start = Date.now();
    const result = cb(input);
    const duration = Date.now() - start;

    console.log(`Test #${i}`, result === expected ? '[OK]' : '[ERROR]', time(duration));
    if (result !== expected) {
      console.log(`| file: "${testIn(i)}"`);
      console.log(`| input: "${input}"`);
      console.log(`| result: "${result}"`);
      console.log(`| expected: "${expected}"`);
    }

    i++;
  }
  console.log('Finish');
}

function time(msec) {
  const sec = msec / 1000;
  const min = Math.floor(sec / 60);

  return `time: ${min}:${(sec % 60).toFixed(3)}`;
}

function testIn(i) {
  return `test.${i}.in`;
}

function testOut(i) {
  return `test.${i}.out`;
}