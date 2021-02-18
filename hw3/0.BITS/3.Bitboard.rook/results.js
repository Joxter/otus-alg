import { testRunner } from '../../../test-runner.js';
import { rock } from './code.js';
import { board, res } from '../utils.js';

/**
 * Шаги ладьи
 */
testRunner(import.meta.url, (inp) => {
  return res(rock(+inp.trim()));
}, {isVerbose: true});
