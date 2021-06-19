export function maxSarah_N2(map) {
  let result = 0;

  const heights = getHeights(map);
  const weights = [];
  for (let i = 0; i < heights.length; i++) {
    weights[i] = getWeight(heights[i]);
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) continue;

      let height = heights[i][j];
      let width = weights[i][j];

      let square = width * height;
      if (square > result) {
        result = square;
      }
    }
  }

  return result;
}

function getHeights(map) {
  const heights = Array(map.length);

  for (let i = 0; i < map.length; i++) {
    heights[i] = Array(map.length);
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        heights[i][j] = 0;
      } else {
        heights[i][j] = i >= 1 ? heights[i - 1][j] + 1 : 1;
      }
    }
  }

  return heights;
}

function getWeight(row) {
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

  const width = Array(row.length);
  for (let i = 0; i < row.length; i++) {
    width[i] = right[i] - left[i] + 1;
  }

  return width;
}
