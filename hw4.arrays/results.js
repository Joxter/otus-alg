import { MatrixArray, PureArray } from './code.js';
import { time } from '../test-runner.js';

/*
Test "MatrixArray 100"  N:   1_000_000  time: 0:00.090
Test "MatrixArray 100"  N:  10_000_000  time: 0:00.726
Test "MatrixArray 100"  N:  50_000_000  time: 0:03.451
Test "MatrixArray 100"  N: 100_000_000  time: 0:06.965

Test "MatrixArray 1000" N:  50_000_000  time: 0:03.505
Test "MatrixArray 1000" N: 100_000_000  time: 0:06.965

Test "PureArray"        N:   1_000_000  time: 0:00.038
Test "PureArray"        N:  10_000_000  time: 0:00.267
Test "PureArray"        N:  50_000_000  time: 0:01.017
Test "PureArray"        N: 100_000_000  time: 0:02.570
*/
testArray('MatrixArray 100', new MatrixArray(), '1_000_000');
testArray('MatrixArray 100', new MatrixArray(), '10_000_000');
testArray('MatrixArray 100', new MatrixArray(), '50_000_000');
testArray('MatrixArray 100', new MatrixArray(), '100_000_000');

testArray('MatrixArray 1000', new MatrixArray(), '50_000_000');
testArray('MatrixArray 1000', new MatrixArray(), '100_000_000');

testArray('PureArray', new PureArray(), '1_000_000');
testArray('PureArray', new PureArray(), '10_000_000');
testArray('PureArray', new PureArray(), '50_000_000');
testArray('PureArray', new PureArray(), '100_000_000');

function testArray(title, arr, N) {
  const n = +N.replace(/_/g, '');

  const start = Date.now();
  for (let i = 0; i < n; i++) {
    arr.add(i);
  }
  const duration = Date.now() - start;

  console.log(`Test "${title}" N: ${N} ${time(duration)}`);
}
