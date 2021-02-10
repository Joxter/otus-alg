export function primeA(n) {
  let cnt = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      cnt++;
    }
  }

  return cnt;
}

function isPrime(x) {
  if (x === 2) return true;
  if (x % 2 === 0) return false;

  const max = Math.sqrt(x);
  for (let i = 3; i <= max; i = i + 2) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

let primes = [];

export function primeB(n) {
  primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrimeB(i)) {
      primes.push(i);
    }
  }

  return primes.length;
}

function isPrimeB(x) {
  if (x === 2) return true;

  const max = Math.sqrt(x);
  for (const pr of primes) {
    if (pr > max) return true;
    if (x % pr === 0) return false;
  }

  return true;
}

export function primeC(n) {
  const erat = Array.from({length: n + 1}).fill(false);
  let cnt = 0;

  for (let i = 2; i <= n; i++) {
    if (!erat[i]) {
      cnt++;

      for (let j = i * i; j < erat.length; j += i) {
        erat[j] = true;
      }
    }
  }

  return cnt;
}
