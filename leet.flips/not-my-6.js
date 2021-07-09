// https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/discuss/1044447/Javascript-Regular-BFS

const getInitialState = mat => {
  const m = mat.length;
  const n = mat[0].length;
  const state = [];
  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      state.push(mat[i][j]);
    }
  }
  return state.join('');
}
const getTargetState = mat => {
  const m = mat.length;
  const n = mat[0].length;
  const state = [];
  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      state.push(0);
    }
  }
  return state.join('');
}
const get2dMat = (node, m, n) => {
  const mat = new Array(m).fill(0).map(a => new Array(n).fill(0));
  for (let i=0; i < node.length; i++) {
    const cell = node[i];
    const row = Math.floor(i/n);
    const col = i - row * n;
    mat[row][col] = cell === '0' ? 0 : 1;
  }
  return mat;
}
const getCopy = mat => {
  const m = mat.length;
  const state = [];
  for (let i=0; i < m; i++) {
    state.push([...mat[i]]);
  }
  return state;
}
const flipCells = (mat, i, j) => {
  const directions = [[-1,0],[1,0],[0,-1],[0,1]];
  const m = mat.length;
  const n = mat[0].length;
  mat[i][j] = mat[i][j] === 0 ? 1: 0;
  for (const [p, q] of directions) {
    const x = i + p;
    const y = j + q;
    // skip boundary
    if(x < 0 || x >= m || y < 0 || y >= n) {
      continue;
    }
    mat[x][y] = mat[x][y] === 0 ? 1: 0;
  }
}
const getNeighbors = (node, m, n) => {
  const mat = get2dMat(node, m, n);
  const neighbors = [];
  for (let i=0; i < m; i++) {
    for (let j=0; j < n; j++) {
      // create copy
      const copy = getCopy(mat);
      // flip
      flipCells(copy, i, j);
      neighbors.push(getInitialState(copy));

    }
  }
  return neighbors;
}
/**
 * @param {number[][]} mat
 * @return {number}
 */
export function minFlips(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const start = getInitialState(mat);
  const target = getTargetState(mat);

  // initialize queue
  const visited = new Set();
  const queue = [start];
  visited.add(start);
  let ans = 0;
  while(queue.length > 0) {
    const size = queue.length;
    for (let i=0; i < size; i++) {
      const node = queue.shift();

      // if match target
      if(node === target) {
        return ans;
      }

      // process neighbor
      const neighbors = getNeighbors(node, m, n);
      for (const neighbor of neighbors) {
        if(!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    ans++;
  }
  return -1;
};