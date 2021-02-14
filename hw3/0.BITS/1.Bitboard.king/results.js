import { testRunner } from '../../../test-runner.js';
import { king } from './code.js';
import { res } from '../utils.js';

/**
 * Шаги короля
 */
testRunner(import.meta.url, (inp) => {
  return res(king(+inp.trim()));
}, {isVerbose: true});
