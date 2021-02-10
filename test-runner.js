import { readFileSync, existsSync } from 'fs';

export function testRunner(dataFolder, cb, {isVerbose} = {}) {
  if (!dataFolder.includes('results.js')) {
    throw Error('Нужно запускать тест из файла results.js');
  }
  dataFolder = dataFolder.replace('results.js', '');
  dataFolder = dataFolder.replace('file:///C:', '');
  console.log(dataFolder);

  let i = 0;
  const totalStart = Date.now();

  console.log(`Start`);
  while (existsSync(dataFolder + testIn(i))) {
    const input = readFileSync(dataFolder + testIn(i)).toString().trim();
    const expected = readFileSync(dataFolder + testOut(i)).toString().trim();

    const start = Date.now();
    const result = cb(input);
    const duration = Date.now() - start;
    const isOk = result == expected;

    console.log(`Test #${i}${i < 10 ? ' ' : ''}`, isOk ? ' [OK] ' : '[FAIL]', time(duration));

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
  const letfSec = sec % 60;

  return `time: ${min}:${letfSec < 10 ? '0' : ''}${letfSec.toFixed(3)}`;
}

function testIn(i) {
  return `test.${i}.in`;
}

function testOut(i) {
  return `test.${i}.out`;
}

export function printProgress(str) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(str);
}

export function finishProgress() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
}
