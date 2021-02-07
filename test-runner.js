import { readdirSync, readFileSync } from 'fs';
import { count } from './hw1/0.solution.js';
import { luckyTicketsCount, luckyTicketsCount2 } from './hw1/1.solution.js';
import { powA, powB, powC } from './hw2/3.Solution.js';
import { fibA, fibB, fibC, fibD } from './hw2/4.Solution.js';

// './hw1/0.String/' './hw1/1.Tickets/'
// './hw2/3.Power/' './hw2/4.Fibo/'

runner('./hw2/4.Fibo/', (inp) => {
  // const [x, n] = inp.trim().split(/\s+/);
  return fibB(+inp.trim());
  // return (typeof res === 'string') ? res : String(res);
  // return Number.isInteger(res) ? res.toFixed(1) : res.toFixed(11);
  // return String(luckyTicketsCount2(+inp))
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
    const isOk = result == expected;

    console.log(`Test #${i}`, isOk ? '[OK]' : '[ERROR]', time(duration));

    if (!isOk && isVerbose) {
      const expected2 = expected.length > 20 ? expected.slice(0, 20) + `... total ${expected.length} chars` : expected;
      const result2 = result.length > 20 ? result.slice(0, 20) + `... total ${result.length} chars` : result;
      console.log(`| input: "${input}"`);
      console.log(`| result:   "${result2}"`);
      console.log(`| expected: "${expected2}"`);
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