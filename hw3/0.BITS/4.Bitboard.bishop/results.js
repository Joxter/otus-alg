import { testRunner } from '../../../test-runner.js';
import { bishop } from './code.js';
import { board, res } from '../utils.js';

/**
 * Шаги слона
 */
testRunner(import.meta.url, (inp) => {
  return res(bishop(+inp.trim()));
}, {isVerbose: true});
