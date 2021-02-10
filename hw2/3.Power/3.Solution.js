export function powA(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

export function powB(x, n) {
  if (n === 0) return 1;

  let result = x;
  let i = 1;

  for (let pow2 = 2; pow2 <= n; pow2 += pow2) {
    result *= result;
    i = pow2;
  }

  while (i++ < n) {
    result *= x;
  }

  return result;
}

export function powC(x, n) {
  let result = 1;

  for (let i = 1; n > 0; i += i) {
    if (n % 2 === 1) {
      result = result * pow2(x, i);
    }
    n = Math.floor(n / 2);
  }

  return result;
}

function pow2(x, n) {
  if (n === 0) return 1;

  for (let i = 1; i < n; i += i) {
    x *= x;
  }

  return x;
}
