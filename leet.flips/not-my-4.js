// https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/discuss/448155/JavaScript-Easy-to-understand-BFS-2-solutions

// SOLUTION 1
export function minFlips (mat) {
  const row = mat.length - 1;
  const col = mat[0].length - 1;
  const initVal = serialize(mat);
  if (initVal === 0) return 0;
  const visited = new Set([initVal]);
  let queue = [mat];
  let step = 0;

  while (queue.length) {
    const next = [];
    ++step;
    for (let i = 0; i < queue.length; ++i) {
      for (let x = 0; x <= row; ++x) {
        for (let y = 0; y <= col; ++y) {
          const fliped = flip(queue[i], x, y);
          const val = serialize(fliped);
          if (val === 0) return step;
          if (visited.has(val)) continue;
          visited.add(val);
          next.push(fliped)
        }
      }
    }
    queue = next;
  }

  return -1;

  function serialize(arr) {
    let value = 0;
    for (let i = 0; i <= row; ++i) {
      for (let j = 0; j <= col; ++j) {
        value = (value << 1) + arr[i][j];
      }
    }
    return value;
  }

  function flip(arr, x, y) {
    const ret = JSON.parse(JSON.stringify(arr));
    ret[x][y] ^= 1;
    x > 0 && (ret[x - 1][y] ^= 1);
    y > 0 && (ret[x][y - 1] ^= 1);
    x < row && (ret[x + 1][y] ^= 1);
    y < col && (ret[x][y + 1] ^= 1);
    return ret;
  }
};