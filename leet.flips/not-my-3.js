// https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/discuss/446939/JavaScript-BFS-72ms

export function minFlips(initialMatrix) {
  const height = initialMatrix.length;
  const width = initialMatrix[0].length;
  const visited = new Set();
  const queue = [[initialMatrix, 0]];

  while (queue.length > 0) {
    const [matrix, timesTried] = queue.shift();
    const matrixId = matrixToId(matrix);

    if (visited.has(matrixId)) {
      continue;
    }

    // matrixToId([[0,0,0],[0,0,0],[0,0,0]]) == 0
    if (matrixId === 0) {
      return timesTried;
    }

    visited.add(matrixId);

    for (let y = 0; y < height; ++y) {
      for (let x = 0; x < width; ++x) {
        queue.push([getFlippedMatrix(matrix, y, x), timesTried + 1]);
      }
    }
  }

  return -1;
}

// matrix id is a bit number
// e.g. [[0, 1, 0], [1, 1, 0], [0, 1, 0]] == 2^0*0 + 2^1*1 + 2^2*0 + 2^3*1 + 2^4*1 + ...
// this is used for map's key. Because JavaScript's Map only tells with key's reference equility
function matrixToId(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  let id = 0;

  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (matrix[y][x] === 0) continue;

      const cellId = y * width + x;

      id += 2 ** cellId;
    }
  }

  return id;
}

// copy, flip and return from the given matrix
function getFlippedMatrix(matrix, y, x) {
  const height = matrix.length;
  const width = matrix[0].length;
  const nextMatrix = [...matrix.map(row => [...row])];

  nextMatrix[y][x] = 1 - nextMatrix[y][x];

  if (y >= 1) {
    nextMatrix[y - 1][x] = 1 - nextMatrix[y - 1][x];
  }

  if (y < height - 1) {
    nextMatrix[y + 1][x] = 1 - nextMatrix[y + 1][x];
  }

  if (x >= 1) {
    nextMatrix[y][x - 1] = 1 - nextMatrix[y][x - 1];
  }

  if (x < width - 1) {
    nextMatrix[y][x + 1] = 1 - nextMatrix[y][x + 1];
  }

  return nextMatrix;
}
