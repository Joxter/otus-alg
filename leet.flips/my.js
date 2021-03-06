export function minFlips(mat) {
  let m = mat[0].length;

  let newMat = [];
  for (let i = 0; i < mat.length; i++) {
    newMat.push(...mat[i]);
  }
  mat = newMat;

  if (isZero(mat)) return 0;

  let cells = [];
  for (let i = 0; i < mat.length; i++) {
    cells.push(i);
  }

  for (let i = 1; i <= mat.length; i++) {
    let res = getSubsets(cells, i, steps => {
      let resMat = [...mat];
      goSteps(resMat, m, steps);
      if (isZero(resMat)) {
        return {i};
      }
    });
    if (res) return res.i;
  }

  return -1;
};

function goSteps(mat, m, steps) {
  for (let k = 0; k < steps.length; k++) {
    let cell = steps[k];

    mat[cell] = mat[cell] === 1 ? 0 : 1;
    if (cell - m >= 0) mat[cell - m] = mat[cell - m] === 1 ? 0 : 1;
    if (cell + m < mat.length) mat[cell + m] = mat[cell + m] === 1 ? 0 : 1;
    if (cell % m > 0) mat[cell - 1] = mat[cell - 1] === 1 ? 0 : 1;
    if (cell % m < m - 1) mat[cell + 1] = mat[cell + 1] === 1 ? 0 : 1;
  }
}

function isZero(mat) {
  for (let i = 0; i < mat.length; i++) {
    if (mat[i] === 1) return false;
  }
  return true;
}

function getSubsets(arr, len, cb) {
  let exit;

  function fn(comb, lastInd) {
    if (exit) return;
    if (comb.length === len) {
      let end = cb(comb);
      if (end) exit = end;
      return;
    }

    let from = lastInd;
    let to = arr.length - len + comb.length;

    for (let i = from; i <= to; i++) {
      fn([...comb, arr[i]], i + 1);
    }
  }

  fn([], 0);
  return exit;
}
