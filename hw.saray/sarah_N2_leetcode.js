// https://leetcode.com/problems/maximal-rectangle/discuss/125717/javascript-100.00-72-ms

export function maxSarah_N2_leetcode(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  const height = matrix.length;
  const width = matrix[0].length;
  const lefts = Array(width).fill(0);
  const rights = Array(width).fill(width);
  const heights = Array(width).fill(0);
  let max = 0;
  for (let row = 0; row < height; row++) {
    let left = 0;
    let right = width;
    for (let i = 0; i < width; i++) {
      if (matrix[row][i] === 0) {
        lefts[i] = left > lefts[i] ? left : lefts[i];
        heights[i]++;
      } else {
        lefts[i] = heights[i] = 0;
        left = i + 1;
      }

      const rightIdx = width - 1 - i;
      if (matrix[row][rightIdx] === 0) {
        rights[rightIdx] = right < rights[rightIdx] ? right : rights[rightIdx];
      } else {
        rights[rightIdx] = width;
        right = rightIdx;
      }
    }
    for (let i = 0; i < width; i++) {
      let a = (rights[i] - lefts[i]) * heights[i];
      max = max > a ? max : a;
    }
  }
  return max;
}