export function maxSarah_N2(map) {
  let result = 0;

  const heights = Array(map[0].length).fill(0);
  for (let i = 0; i < map.length; i++) {

    for (let j = 0; j < map[i].length; j++) {
      heights[j] = map[i][j] === 1 ? 0 : heights[j] + 1;
    }
    const [left, right] = getLeftRight(heights);

    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 0) {
        let square = (right[j] - left[j] + 1) * heights[j];
        if (square > result) {
          result = square;
        }
      }
    }
  }

  return result;
}

function getLeftRight(row) {
  let stack = [];
  const right = Array(row.length);

  for (let i = 0; i < row.length; i++) {
    while (stack.length > 0 && row[i] < row[stack[stack.length - 1]]) {
      right[stack.pop()] = i - 1;
    }
    stack.push(i);
  }
  while (stack.length > 0) right[stack.pop()] = row.length - 1;

  const left = Array(row.length);
  stack = [];

  for (let i = row.length - 1; i >= 0; i--) {
    while (stack.length > 0 && row[i] < row[stack[stack.length - 1]]) {
      left[stack.pop()] = i + 1;
    }
    stack.push(i);
  }
  while (stack.length > 0) left[stack.pop()] = 0;

  return [left, right];
}
