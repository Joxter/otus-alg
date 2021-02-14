import { testRunner } from '../../../test-runner.js';
import { knight } from './code.js';
import { board, res } from '../utils.js';

/**
 * Шаги коня
 */
testRunner(import.meta.url, (inp) => {
  return res(knight(+inp.trim()));
}, {isVerbose: true});
