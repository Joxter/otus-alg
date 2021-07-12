import { time } from '../test-runner.js';
import { minFlips } from './my.js';
// import { minFlips } from './not-my-1.js';
// import { minFlips } from './not-my-2.js';
// import { minFlips } from './not-my-3.js';
// import { minFlips } from './not-my-4.js';
// import { minFlips } from './not-my-5.js';
// import { minFlips } from './not-my-6.js';

const matrix = [
  // [1,1,0,0,1,1,1], //
  [1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0],
  // [1,0,0,1,0,0,1], //
  // [1,0,1,1,1,1,0], //
  // [0,0,0,1,0,0,0], //
  // [1,1,1,1,1,0,1], //
  // [0,0,0,1,0,0,0], //
];

let mats = {
  '3*3': [
    [1, 1, 1],
    [1, 0, 1],
    [0, 0, 0],
  ],
  '4*4-none': [
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 0],
  ],
  '4*4': [
    [0, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 1],
  ],
  '3*5-none': [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0],
  ],
  '3*5-ez': [
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
  ],
  '3*5': [
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
  ],
  '3*7-ez': [
    [1, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
  ],
  '4*6-ez': [
    [1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0],
  ],
  '3*7': [
    [1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
  ],
  '4*6-extreme': [
    [1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1],
    [0, 0, 0, 1, 0, 0],
  ],
};

//                                                                                        <10ms
/*                                     my   my-opt-1  not-my-1   not-my-2   not-my-3   not-my-4   not-my-5   not-my-6
START:  3*3
       RESULT:  6;  TIME:  time: 0:00.013   0:00.008  0:00.027   0:00.025   0:00.018   0:00.015   0:00.011   0:00.025
START:  4*4-none
       RESULT: -1;  TIME:  time: 0:00.197   0:00.025  0:00.186   0:03.161   0:01.793   0:00.157   WRONG      0:00.097
START:  4*4
       RESULT:  7;  TIME:  time: 0:00.065   0:00.003  0:00.177   0:03.296   0:03.677   0:00.131   WRONG      0:00.064
START:  3*5-none
       RESULT: -1;  TIME:  time: 0:00.062   0:00.009  0:00.150   0:03.277   0:02.958   0:00.115   WRONG      0:00.057
START:  3*5-ez
       RESULT:  2;  TIME:  time: 0:00.006   0:00.000  0:00.003   0:00.000   0:00.001   0:00.000   WRONG      0:00.001
START:  3*5
       RESULT:  7;  TIME:  time: 0:00.024   0:00.003  0:00.140   0:03.183   0:03.497   0:00.089   WRONG      0:00.051
START:  3*7-ez
       RESULT:  2;  TIME:  time: 0:00.349   0:00.001  0:00.002   0:00.000   0:00.000   0:00.000   WRONG      0:00.001
START:  4*6-ez
       RESULT:  2;  TIME:  time: 0:03.097   0:00.000  0:00.002   0:00.000   0:00.001   0:00.000   WRONG      0:00.001
START:  3*7
       RESULT: 16;  TIME:  time: 0:05.160   0:00.595  1:57.922   --------   --------   1:34.530   WRONG     10:09.164
START:  4*6-extreme
       RESULT: 16;  TIME:  time: 0:47.507   0:04.822  ---------- ---------  --------   --------   WRONG      --------
*/
runTest(mats, minFlips);

function runTest(inputs, fn) {
  for (let key in inputs) {
    let matrix = inputs[key];

    let start = Date.now();
    console.log('START: ', key);
    let result = fn(matrix) + '';
    console.log(`       RESULT: ${result.padStart(2, ' ')};  TIME: `, time(Date.now() - start));
  }
}