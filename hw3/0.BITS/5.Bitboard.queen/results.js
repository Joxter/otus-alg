import { testRunner } from '../../../test-runner.js';
import { queen } from './code.js';
import { board, res } from '../utils.js';

/**
 * Шаги ферзя
 */
testRunner(import.meta.url, (inp) => {
  return res(queen(+inp.trim()));
}, {isVerbose: true});
