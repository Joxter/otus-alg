
// https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/discuss/446466/JavaScript-BFS-with-explanation-(2-approaches) */
// Version 1

const stringify = (matrix) => matrix.reduce((str, row) => `${str}-${row.join('-')}`, '');

// flips the element if it exists
const flip = (matrix, row, col) => {
  if (matrix[row] && matrix[row][col] !== undefined) {
    matrix[row][col] = matrix[row][col] ? 0 : 1;
  }
}

/**
 * @param {number[][]} mat
 * @return {number}
 */
export function minFlips(mat) {
  // create a copy of the matrix with all elements as 0
  // stringify the copy so that it can be compared to another matrix in constant time
  const final = stringify(mat.map((row) => row.map(() => 0)));

  const seen = new Set();

  // queue holds the matrix and the number of flips for BFS
  const queue = [[mat, 0]];

  // directions are the delta from the current position in the format of [deltaRow, deltaCol]
  const directions = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];

  while (queue.length) {
    const [matrix, numFlips] = queue.shift();

    // stringify matrix so that you can see if it has been visited or is the final result in constant time;
    const strMatrix = stringify(matrix);

    // if all elements are 0, return the number of flips
    if (strMatrix === final) return numFlips;

    // skip this matrix if the matrix has already been attempted
    if (!seen.has(strMatrix)) {
      seen.add(strMatrix);

      // iterate through all elements in the matrix and flip each element;
      for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {

          // copy matrix
          const newMatrix = matrix.map((row) => [...row])

          // flip each position corresponding to the current position
          directions.forEach(([down, right]) => flip(newMatrix, i + down, j + right))

          // push matrix into the queue
          queue.push([newMatrix, numFlips + 1]);
        }
      }
    }
  }

  // if no results were found return -1
  return -1;
};