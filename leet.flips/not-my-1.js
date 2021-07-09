
// https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/discuss/446466/JavaScript-BFS-with-explanation-(2-approaches) */
// Version 2

class Queue {
  constructor() {
    this.head = new Node();
    this.tail = this.head;
    this.seen = new Set();
  }

  isEmpty() {
    return this.head.next === null;
  }

  enqueue(value) {
    const { matrix } = value;
    if (!this.seen.has(matrix)) {
      this.seen.add(matrix);
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    const { next } = this.head;
    if (next === this.tail) this.tail = this.head;
    this.head.next = next.next;
    return next.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function storeQueueAndValues (queue, numRows, numCols) {

  // directions holds the change in down and right movement from current position
  const directions = [[0,0], [0,1],[0,-1],[1,0],[-1,0]];

  // this will be returned so that we can call this function needing to pass only 2 arguments
  const flip = (strMatrix, numFlips) => {

    // iterate through the matrix
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {

        // parses the string matrix to create a copy
        const matrix = JSON.parse(strMatrix);

        // flips elements corresponding to the current position
        for (let [down, right] of directions) {
          const [nextRow,nextCol] = [row + down, col + right];
          if (matrix[nextRow] && matrix[nextRow][nextCol] !== undefined) {
            matrix[nextRow][nextCol] = matrix[nextRow][nextCol] ? 0 : 1;
          }
        }

        // stringifies the matrix
        queue.enqueue({matrix: JSON.stringify(matrix), numFlips})
      }
    }
  }
  return flip
}

export function minFlips(mat) {
  // make a copy with all elements as 0 and strigify to refence if we have hit the final matrix
  const final = JSON.stringify(mat.map(row => row.map(() => 0)));
  const queue = new Queue();

  // store the queue, number of rows and number of columns to have reference to in the function
  const flip = storeQueueAndValues(queue, mat.length, mat[0].length);
  queue.enqueue({ matrix: JSON.stringify(mat), numFlips: 0 });
  while (!queue.isEmpty()) {

    // since matrix is a stringified version of the matrix, we can compare it to the final stringified matrix in constant time
    let { matrix, numFlips } = queue.dequeue();
    if (matrix === final) return numFlips;

    // attempt to flip each position and neighboring positions in the matrix
    flip(matrix, numFlips + 1);
  }
  return -1;
};

