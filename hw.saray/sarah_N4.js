
export function maxSarah_N4(map) {
  let result = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) continue;

      let height = map.length;
      let width = 0;
      while (map[i][j + width] === 0) {
        height = Math.min(heightAt(map, i, j + width), height);
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

function heightAt(map, i, j) {
  let height = 0;
  while (map[i - height] && map[i - height][j] === 0) {
    height++;
  }
  return height;
}
