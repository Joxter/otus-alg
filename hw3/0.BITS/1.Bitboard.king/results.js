import { testRunner } from '../../../test-runner.js';
import { king, last64 } from './code.js';

function res(n) {
  const b = last64(n.toString(2));
  return [b.replace(/0/g, '').length, n];
}


/**
 *
 */
testRunner(import.meta.url, (inp) => {
  return res(king(+inp.trim())).join('\r\n');
}, {isVerbose: true});


// my  0100000011000000000000000000000000000000000000000000000000000000
// tst  100000011000000000000000000000000000000000000000000000000000000