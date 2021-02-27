import { MatrixArray, PureArray } from './code.js';
import { time } from '../test-runner.js';

/*

MatrixArray.
Массив массивов размером N. При заполнении, добавляем новый дочерний массив размером N и заполняем его.
Так же как VectorArray производительность сильно зависит от N.
2кк элементов добавлялось:
11 сек,   при N =    100
0.25 сек, при N =  1_000
0.12 сек, при N = 10_000
Так же этот массив оказался самым сложным в реализации, притом что работает несравнимо хуже встроенного динамического массива.

Test "MatrixArray 100" N: 100_000 time: 0:00.059
Test "MatrixArray 100" N: 1_000_000 time: 0:02.914
Test "MatrixArray 100" N: 2_000_000 time: 0:11.665

Test "MatrixArray 1000" N: 1_000_000 time: 0:00.112
Test "MatrixArray 1000" N: 2_000_000 time: 0:00.255
Test "MatrixArray 1000" N: 10_000_000 time: 0:03.334

Test "MatrixArray 10000" N: 100_000 time: 0:00.005
Test "MatrixArray 10000" N: 1_000_000 time: 0:00.059
Test "MatrixArray 10000" N: 2_000_000 time: 0:00.128
Test "MatrixArray 10000" N: 10_000_000 time: 0:00.720
Test "MatrixArray 10000" N: 50_000_000 time: 0:04.099

Test "PureArray" N: 1_000_000 time: 0:00.032
Test "PureArray" N: 2_000_000 time: 0:00.051
Test "PureArray" N: 10_000_000 time: 0:00.255
*/
// testArray('MatrixArray 100', new MatrixArray(100), '100_000');
// testArray('MatrixArray 100', new MatrixArray(100), '1_000_000');
// testArray('MatrixArray 100', new MatrixArray(100), '2_000_000');
//
// testArray('MatrixArray 1000', new MatrixArray(1000), '1_000_000');
// testArray('MatrixArray 1000', new MatrixArray(1000), '2_000_000');
// testArray('MatrixArray 1000', new MatrixArray(1000), '10_000_000');
//
// testArray('MatrixArray 10000', new MatrixArray(10000), '100_000');
// testArray('MatrixArray 10000', new MatrixArray(10000), '1_000_000');
// testArray('MatrixArray 10000', new MatrixArray(10000), '2_000_000');
// testArray('MatrixArray 10000', new MatrixArray(10000), '10_000_000');
// testArray('MatrixArray 10000', new MatrixArray(10000), '50_000_000');
//
// testArray('PureArray', new PureArray(), '1_000_000');
// testArray('PureArray', new PureArray(), '2_000_000');
// testArray('PureArray', new PureArray(), '10_000_000');
// testArray('PureArray', new PureArray(), '50_000_000');
// testArray('PureArray', new PureArray(), '100_000_000');

function testArray(title, arr, N) {
  const n = +N.replace(/_/g, '');

  const start = Date.now();
  for (let i = 0; i < n; i++) {
    arr.add(i);
  }
  const duration = Date.now() - start;

  console.log(`Test "${title}" N: ${N} ${time(duration)}`);
}
