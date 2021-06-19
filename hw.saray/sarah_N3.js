export function maxSarah_N3(map) {
  let result = 0;

  const heights = getHeights(map);

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) continue;

      let height = map.length;
      let width = 0;
      while (map[i][j + width] === 0) {
        height = Math.min(heights[i][j + width], height);
        let area = (width + 1) * height;
        if (area > result) {
          result = area;
        }
        width++;
      }
    }
  }

  return result;
}

function getHeights(map) {
  const heights = [];

  for (let i = 0; i < map.length; i++) {
    heights[i] = [];
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