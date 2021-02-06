import { readdirSync, readFileSync } from 'fs';
import { count } from './hw1/0.solution.js';
import { luckyTicketsCount, luckyTicketsCount2 } from './hw1/1.solution.js';
import { powA, powB, powC } from './hw2/3.Solution.js';

// './hw1/0.String/' './hw1/1.Tickets/'
// './hw2/3.Power/'

runner('./hw1/1.Tickets/', (inp) => {
  // const [x, n] = inp.trim().split(/\s+/);
  // const res = powC(+x, +n);
  // return Number.isInteger(res) ? res.toFixed(1) : res.toFixed(11);
  return String(luckyTicketsCount2(+inp))
}, {isVerbose: false});

function runner(dataFolder, cb, {isVerbose}) {
  const files = readdirSync(dataFolder).filter((fileName) => fileName.includes('test'));

  let i = 0;
  const totalStart = Date.now();

  console.log(`Start. folder "${dataFolder}"`);
  while (files.includes(testIn(i))) {
    const input = readFileSync(dataFolder + testIn(i)).toString().trim();
    const expected = readFileSync(dataFolder + testOut(i)).toString().trim();

    const start = Date.now();
    const result = cb(input);
    const duration = Date.now() - start;

    console.log(`Test #${i}`, result === expected ? '[OK]' : '[ERROR]', time(duration));
    if (result !== expected && isVerbose) {
      console.log(`| input: "${input}"`);
      console.log(`| result:   "${result}"`);
      console.log(`| expected: "${expected}"`);
      console.log(`--------------------`);
    }

    i++;
  }
  console.log(`Finish. Total time: ${time(Date.now() - totalStart)}`);
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